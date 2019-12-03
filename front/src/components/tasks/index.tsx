import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { LinearProgress } from "@material-ui/core";

const EXCHANGE_RATES = gql`
  {
    rates(currency: "EUR") {
      currency
      rate
    }
  }
`;

const Tasks: React.FC = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <LinearProgress />;
  if (error) return <p>Nothing yet here :(</p>;

  return data.rates.map(({ currency, rate }: any) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
};

export default Tasks;
