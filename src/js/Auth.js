//Account Object
export class Account {
  constructor() {
    // Retrieve the JSON from local storage
    const accountJSON = localStorage.getItem("accounts");

    // Parse the JSON (if it exist)
    this.accountList = accountJSON ? JSON.parse(accountJSON) : [];
  }

  get all() {
    return this.accountList;
  }

  //If there is an account with the same email and password, return the account
  findAccount(email, password) {
    const targetAccount = this.accountList?.find((acc) => acc.email === email);
    if (!targetAccount) return undefined;
    console.log(targetAccount);
    return targetAccount;
  }

  //If there is an account with the same username, return true
  findUsername(username) {
    const targetAccount = this.accountList?.find(
      (acc) => acc.username === username
    );
    return targetAccount !== undefined;
  }

  add(account) {
    // Add the account into the array
    this.accountList.push(account);

    // Save the stringfied JSON array into local storage
    localStorage.setItem("accounts", JSON.stringify(this.accountList));
  }

  getUsername() {
    if (this.accountList.length === 0) return undefined;
    const latestAccount = this.accountList[this.accountList.length - 1];
    return latestAccount.username;
  }

  getLatestFirstName() {
    if (this.accountList.length === 0) return undefined;
    const latestAccount = this.accountList[this.accountList.length - 1];
    return latestAccount.firstName;
  }

  getLatestSecondName() {
    if (this.accountList.length === 0) return undefined;
    const latestAccount = this.accountList[this.accountList.length - 1];
    return latestAccount.secondName;
  }
}
