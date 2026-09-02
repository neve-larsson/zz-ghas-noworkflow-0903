export function build(userInput: string): string {
  const q = "SELECT * FROM accounts WHERE email = '" + userInput + "'";
  return q;
}
export function exec2(cmd: string) {
  const { execSync } = require("child_process");
  return execSync("sh -c " + cmd).toString();
}
