import user from "./profile/user.json";
import Profile from "./profile/profile";
import data from "./statistics/data.json";
import Statistics from "./statistics/statistics";
import FriendList from "./friendlist/friendlist";
import friends from "./friendlist/friends.json";
import TransactionHistory from "./transactionHistory/transactionhistory";
import transactions from "./transactionHistory/transactions.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
       <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
       <TransactionHistory transaction={transactions} />
    </div>
  );
};
