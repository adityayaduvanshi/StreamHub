import { getSelfByUsername } from '@/lib/auth-service';
import { redirect } from 'next/navigation';
import { Navbar } from './_components/navbar';
import type { Metadata } from 'next';
import Sidebar from './_components/sidebar';
import { Container } from './_components/container';

export const metadata: Metadata = {
  title: `Streamhub | Creator Dashboard`,
  description: 'Stream anything here.',
};

interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const CreatorLayout = async ({ children, params }: CreatorLayoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    redirect('/');
  }
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default CreatorLayout;
