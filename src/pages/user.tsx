
import AddUser from "../components/add-user";
import UserCard from "../components/user-card";
import { useAppSelector } from "../store";

function UserPage() {
  const users = useAppSelector(state => state.users.entities);

  return (
    <div className="flex flex-col justify-center items-center h-full ">
      <AddUser />
      {users.map(user => {
        return (
          <UserCard key={user.id} user={user} />
        );
      })}
    </div>
  )
}

export default UserPage;