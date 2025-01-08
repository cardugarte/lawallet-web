'use client';

import Navbar from '@/components/Layout/Navbar';

import { Profile } from '@/features/profile';
import { useIdentity } from '@lawallet/react';

export default function Page() {
  const identity = useIdentity();
  // console.log(identity);

  return (
    <>
      <Navbar showBackPage={true} overrideBack="/dashboard" />

      <Profile pubkey={identity?.pubkey as string} />
    </>
  );
}
