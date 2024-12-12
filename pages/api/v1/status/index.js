function status(request, response) {
  response.status(200).json({ testing: "123" });
}

export default status;
