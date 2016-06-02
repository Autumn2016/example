function FeedBack(retcode, message, data) {
    this.status = retcode;
    this.msg = message;
    this.data = data;
}

console.log(new FeedBack(200, "message test", {city:'cd'}));