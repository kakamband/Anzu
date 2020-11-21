module.exports = (element) => {
  if (!element) {
    return;
  }

  const currentTime = new Date(Date.now());
  const deadline = new Date(element.deadline);
  const dateDifference = new Date(deadline - currentTime);

  const differenceInDays = dateDifference.getUTCDate();
  const formattedTime = new Date(element.deadline).toISOString().split('T')[0];

  return `— ${element.name} (Deadline: ${formattedTime} — ${differenceInDays} days)`;
};