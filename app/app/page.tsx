// import ProjectsList from '@/components/home/ProjectsList';
import SideBar from '@/components/home/SideBar';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-col lg:flex-row bg-red-500 w-screen h-[calc(100vh-4rem)]">
        <SideBar />
        {/* <ProjectsList /> */}
      </div>
    </div>
  );
}
