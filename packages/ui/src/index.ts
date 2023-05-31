interface Params {
    msg: string;
}

export const something = (params: Params) => console.log("Its working whiout compile", params.msg);