export class Users {
    constructor(
        public login:string,
        public avatar_url:string,
        public repos_url:string,
        public name:string,
        public followers:number,
        public following:number,
    ){}
}
