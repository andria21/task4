import {
  MainDiv,
  TableContainer,
  Tr,
  Th,
  Td,
  BlockButton,
  TableDIv,
} from "./table.module";

import { useState } from "react";

import useSWR from "swr";
import dynamic from "next/dynamic";
import { signOut, useSession } from "next-auth/react";

const Table = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, isLoading } = useSWR(`/api/users`, fetcher);

  const session = useSession();

  const toggleCheckbox = (userId, userEmail) => {
    setSelectedUsers((prevSelectedUsers) => {
      if (prevSelectedUsers.some((user) => user.userId === userId)) {
        return prevSelectedUsers.filter((user) => user.userId !== userId);
      } else {
        return [...prevSelectedUsers, { userId, userEmail }];
      }
    });
  };

  const handleBlock = async (buttonName) => {
    const selectedUserIds = selectedUsers.map((user) => user.userId);
    try {
      await fetch(`/api/users/`, {
        method: "POST",
        body: JSON.stringify({
          ids: selectedUserIds,
          buttonName,
        }),
      });
      mutate();
      setSelectedUsers([]);
      setSelectAll(false);
      if (buttonName === "delete") {
        selectedUsers.forEach((user) => {
          if (user.userEmail === session.data.user.email) {
            signOut();
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(
        data.map((user) => ({ userId: user._id, userEmail: user.email }))
      );
    }
    setSelectAll(!selectAll);
  };

  return (
    <MainDiv>
      <TableDIv>
        <BlockButton onClick={() => handleBlock("block")}>Block</BlockButton>
        <BlockButton onClick={() => handleBlock("unblock")}>
          Unblock
        </BlockButton>
        <BlockButton onClick={() => handleBlock("delete")}>Delete</BlockButton>

        <TableContainer>
          <thead>
            <Tr>
              <Th>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </Th>
              <Th>Name</Th>
              <Th>e-Mail</Th>
              <Th>Last login</Th>
              <Th>Status</Th>
            </Tr>
          </thead>
          <tbody>
            {!isLoading &&
              data.map((user) => {
                try {
                  if (user.isBlocked || user.isDeleted) {
                    if (session.data.user.email === user.email) {
                      signOut();
                    }
                  }
                } catch (error) {
                  console.log(error);
                }
                return (
                  <Tr key={user._id}>
                    <Td>
                      <input
                        type="checkbox"
                        checked={selectedUsers.some(
                          (u) => u.userId === user._id
                        )}
                        onChange={() => toggleCheckbox(user._id, user.email)}
                      />
                    </Td>
                    <Td>{user.name}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.updatedAt.slice(0, 19)}</Td>
                    <Td>{user.isBlocked ? "Blocked" : "Active"}</Td>
                  </Tr>
                );
              })}
          </tbody>
        </TableContainer>
      </TableDIv>
    </MainDiv>
  );
};

export default dynamic(() => Promise.resolve(Table), { ssr: false });
