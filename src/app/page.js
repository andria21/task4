"use client";

import Navbar from "@/components/navbar/Navbar";
import Table from "@/components/table/Table";
import {
  TableContainer,
  Spinner,
  CenteredSpinnerContainer,
} from "./page.module";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return (
      <CenteredSpinnerContainer>
        <Spinner />
      </CenteredSpinnerContainer>
    );
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
