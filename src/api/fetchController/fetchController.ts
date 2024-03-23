class FetchController {
  static mainLink = `https://api.github.com/repos/`;

  static async getIssues(request: string) {
    const response = await fetch(`${this.mainLink}${request}/issues`);
    const result = await response.json();
    return result;
  }

  static async getRepo(request: string) {
    const response = await fetch(`${this.mainLink}${request}`);
    const result = await response.json();
    return result;
  }
}

export default FetchController;
