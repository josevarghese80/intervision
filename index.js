export const handler = async (event) => {
    console.log(JSON.stringify(event,null,2))
    console.log(`Telephone number is ${event.Details.ContactData.CustomerEndpoint.Address}`)
    //QUASI CODE Look up dynamodb to fetch account related to phone number
    //QUASI CODE Look up account details related to account number.
    //Fetch and send balance back to 
    try{

        const bal = await fetchBalance();
        console.log(`balance is ${bal}`)
        return {
          balance: bal
        };
    }catch(error) {
        console.log(error)
        //Error beuing throws so the error section of Connect in the invoke lambda block handles it.
        throw error;
    }
  };
  
  async function fetchBalance(customerPhoneNumber, companyName) {
  // Get data from external sources via an API call or from a database
          return Math.floor(Math.random() * 1000);
          
  }
  