const dataContainer = document.getElementById('data');
data.forEach(item => {
    const title = item.title;
    const dailyCurrent = item.timeframes.daily.current;
    const weeklyCurrent = item.timeframes.weekly.current;
    const monthlyCurrent = item.timeframes.monthly.current; const html = `
    <h2>${title}</h2>
    <ul>
      <li>Daily: ${dailyCurrent} hours</li>
      <li>Weekly: ${weeklyCurrent} hours</li>
      <li>Monthly: ${monthlyCurrent} hours</li>
    </ul>
  `;
    dataContainer.insertAdjacentHTML('beforeend', html);
});
