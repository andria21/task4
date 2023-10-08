import {
  MainDiv,
  TableContainer,
  Tr,
  Th,
  Td,
  BlockButton,
  TableDIv,
} from "./table.module";

import { useEffect, useState } from "react";

import useSWR from "swr";
import dynamic from "next/dynamic";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Table = () => {
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(`/api/users`, fetcher);

  const router = useRouter();
  const session = useSession();

  const toggleCheckbox = (userId) => {
    setSelectedUserIds((prevSelectedUserIds) => {
      if (userId === "master") {
        return prevSelectedUserIds.length === data.length ? [] : data.map((user) => user._id);
      } else {
        return prevSelectedUserIds.includes(userId)
          ? prevSelectedUserIds.filter((id) => id !== userId)
          : [...prevSelectedUserIds, userId];
      }
    });
  };
  // log out user on deletion of the acc...
  const handleBlock = async (buttonName, methodName) => {
    try {
      await fetch(`/api/users/`, {
        method: `${methodName}`,
        body:
          buttonName === "block" || "unblock"
            ? JSON.stringify({
                ids: selectedUserIds,
                buttonName,
              })
            : JSON.stringify({ ids: selectedUserIds }),
      });
      mutate();
      setSelectedUserIds([]);
      setSelectAll(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedUserIds([]);
    } else {
      const allUserIds = data.map((user) => user._id);
      setSelectedUserIds(allUserIds);
    }
    setSelectAll(!selectAll);
  };

  return (
    <MainDiv>
      <TableDIv>
        <BlockButton onClick={() => handleBlock("block", "POST")}>
          Block
        </BlockButton>
        <BlockButton onClick={() => handleBlock("unblock", "POST")}>
          Unblock
        </BlockButton>
        <BlockButton onClick={() => handleBlock("delete", "DELETE")}>
          Delete
        </BlockButton>

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
                      // if acc is deleted we need to handel it
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
                        checked={selectedUserIds.includes(user._id)}
                        onChange={() => toggleCheckbox(user._id)}
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
