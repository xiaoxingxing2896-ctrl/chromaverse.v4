document.addEventListener("DOMContentLoaded", () => {
  // ===============================
  // 1. 活动倒计时
  // ===============================
  const countdownElement = document.getElementById("countdown");
  const endTime = new Date("2025-02-08T23:59:59").getTime(); // 示例：新春会活动结束时间

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance <= 0) {
      countdownElement.innerHTML = "活动已结束 🎉";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}天 ${hours}时 ${minutes}分 ${seconds}秒`;
  }
  const timer = setInterval(updateCountdown, 1000);
  updateCountdown();


  // ===============================
  // 2. 众筹金额进度
  // ===============================
  const amountElem = document.getElementById("amount");
  const progressElem = document.getElementById("progress-bar");
  const percentElem = document.getElementById("percent");

  let goal = 100000; // 众筹目标金额
  let current = 56230; // 初始金额

  function updateFunding() {
    // 模拟增长
    current += Math.random() * 300;
    if (current > goal) current = goal;

    const percent = Math.min((current / goal) * 100, 100);
    amountElem.textContent = `¥ ${current.toFixed(0)} / ¥ ${goal}`;
    progressElem.style.width = `${percent}%`;
    percentElem.textContent = `${percent.toFixed(1)}%`;
  }
  setInterval(updateFunding, 2000);
  updateFunding();


  // ===============================
  // 3. 支持人数
  // ===============================
  const supportersElem = document.getElementById("supporters");
  let supporters = 1583;

  function updateSupporters() {
    supporters += Math.floor(Math.random() * 3); // 模拟随机增加
    supportersElem.textContent = `${supporters} 人支持`;
  }
  setInterval(updateSupporters, 3500);
  updateSupporters();
});
