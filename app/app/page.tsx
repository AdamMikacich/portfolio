import ProjectsList from '@/components/home/ProjectsList';
import SideBar from '@/components/home/SideBar';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div>
        <SideBar />
        <ProjectsList />
      </div>
    </div>
  );
}
