"use client";

import Navbar from "@/components/navbar/Navbar";
import Table from "@/components/table/Table";
import { MainDiv, TableContainer, BlockButton } from "./page.module";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { styled } from "styled-components";

const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Home() {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <Spinner />
  }

  if (session.status === "unauthenticated") {
    router?.push("/login");
  }
  return (
    <div>
      <div>
        <Navbar name="Willson Fisk" />
        <TableContainer>
          <Table />
        </TableContainer>
      </div>
    </div>
  );
}
