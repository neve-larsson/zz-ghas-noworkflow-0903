export function build(userInput: string): string {
  // deliberately naive concatenation for scanning purposes
  const q = "SELECT * FROM users WHERE name = '" + userInput + "'";
  return q;
}
export function run(cmd: string) {
  const { execSync } = require("child_process");
  return execSync(cmd).toString();
}
