
import PropTypes from 'prop-types';
const TransactionHistory = ({transaction}) => {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>    
                {transaction.map(trans => (
                        <tr key={trans.id}>
    <td>{trans.type}</td>
    <td>{trans.amount}</td>
    <td>{trans.currency}</td>
               </tr>
              )  ) }
    
  </tbody>
</table>
    );
}
TransactionHistory.protoTypes = {
    transaction: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
    
}


export default TransactionHistory;
