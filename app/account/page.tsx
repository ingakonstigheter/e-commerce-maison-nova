import React from "react";
import AccountForm from "./account-form";
import { createClient } from "@/lib/supabase/server";
import AccountSidebar from "@/components/account/account-sidebar";

const Account = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <>
      {/* <div className="h-full flex justify-center items-center bg-amber-700"> */}
      <div className="my-7 xl:px-4 lg:px-0 md:px-8 px-4 h-full flex gap-10 ">
        <div className="w-80">
          <AccountSidebar />
        </div>
        <div className="flex-1">
          <AccountForm user={user} />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Account;
