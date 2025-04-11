import MainHeader from '../../components/headers/Main';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainContent from '../../components/MainContent/MainContent';

export default function Dashboard() {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <MainHeader />
      <Sidebar />
      <MainContent />
    </div>
  );
}
