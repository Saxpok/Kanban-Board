import { InitialState } from "types/slicesTypes/getIssuesSliceTypes";

class FetchController {
  static mainLink = `https://api.github.com/repos/`;

  static async getIssues(request: string, initialState: InitialState) {
    try {
    const response = await fetch(`${this.mainLink}${request}/issues`);
    const result = await response.json();
    return result;
    } catch (e) {
      console.log(e)
      return initialState
    }
  }

  static async getRepo(request: string, initialState: InitialState) {
    try {
    const response = await fetch(`${this.mainLink}${request}`);
    const result = await response.json();
    return result;
    } catch (e) {
      console.log(e)
      return initialState
    }
  }
}

export default FetchController;
