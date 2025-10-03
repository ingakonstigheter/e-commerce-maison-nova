"use client";

import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { type User } from "@supabase/supabase-js";

const AccountForm = ({ user }: { user: User | null }) => {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [avatar_url, setAvartarUrl] = useState<string | null>(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, username, website, avatar_url`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
        setWebsite(data.website);
        setAvartarUrl(data.avatar_url);
      }
    } catch (error) {
      alert(`"Error loading user data!", ${error}`);
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string | null;
    fullname: string | null;
    website: string | null;
    avatar_url: string | null;
  }) {
    try {
      setLoading(true);

      const { error } = await supabase.from("profiles").upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8 flex flex-col h-full bg-[#f5f4f7] rounded-3xl">
      <h2 className="mb-4 text-3xl font-bold">Account Settings</h2>
      <div className="form-widget w-[400px] flex flex-col gap-5">
        {/* ... */}
        <div className="flex flex-col gap-1 font-semibold">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={user?.email}
            placeholder="Användarnamn"
            disabled
            className="py-3 px-6 bg-white rounded-md shadow-md font-medium"
          />
        </div>
        <div className="flex flex-col gap-1 font-semibold">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            value={fullname || ""}
            onChange={(e) => setFullname(e.target.value)}
            className="py-3 px-6 bg-white rounded-md shadow-md font-medium"
          />
        </div>
        <div className="flex flex-col gap-1 font-semibold">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
            className="py-3 px-6 bg-white rounded-md shadow-md font-medium"
          />
        </div>
        <div className="flex flex-col gap-1 font-semibold">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="url"
            value={website || ""}
            onChange={(e) => setWebsite(e.target.value)}
            className="py-3 px-6 bg-white rounded-md shadow-md font-medium"
          />
        </div>
        {/* <div> */}

        <button
          className="button px-8 py-2 mt-6 w-fit bg-amber-200 rounded-full font-semibold cursor-pointer"
          onClick={() =>
            updateProfile({ fullname, username, website, avatar_url })
          }
          disabled={loading}>
          {loading ? "Loading ..." : "Update"}
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default AccountForm;
