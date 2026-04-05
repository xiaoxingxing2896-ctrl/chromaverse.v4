<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>老母鸡真爱守护站 | 咯咯哒！用爱守护每一只老母鸡</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        :root {
            --primary: #FF9F43;
            --secondary: #FFEAA7;
            --text: #2D3436;
            --light: #FFF9F0;
        }
        body {
            background-color: var(--light);
            color: var(--text);
            line-height: 1.6;
        }
        /* 导航栏 */
        nav {
            background: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 999;
        }
        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--primary);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }
        .nav-links a {
            text-decoration: none;
            color: var(--text);
            font-weight: 500;
            transition: color 0.3s;
        }
        .nav-links a:hover {
            color: var(--primary);
        }
        /* Banner */
        .banner {
            background: linear-gradient(135deg, var(--secondary), var(--primary));
            color: white;
            text-align: center;
            padding: 6rem 2rem;
        }
        .banner h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        .banner p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto 2rem;
        }
        .btn {
            display: inline-block;
            padding: 0.8rem 2rem;
            background: white;
            color: var(--primary);
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            transition: transform 0.3s;
        }
        .btn:hover {
            transform: translateY(-3px);
        }
        /* 内容区 */
        .container {
            max-width: 1200px;
            margin: 4rem auto;
            padding: 0 2rem;
        }
        .section-title {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 3rem;
            color: var(--primary);
            position: relative;
        }
        .section-title::after {
            content: '🐔';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 1.5rem;
        }
        /* 卡片布局 */
        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        .card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        .card:hover {
            transform: translateY(-10px);
        }
        .card-img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            background: var(--secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
        }
        .card-content {
            padding: 1.5rem;
        }
        .card-content h3 {
            color: var(--primary);
            margin-bottom: 1rem;
        }
        /* 页脚 */
        footer {
            background: var(--text);
            color: white;
            text-align: center;
            padding: 2rem;
            margin-top: 4rem;
        }
        /* 响应式 */
        @media (max-width: 768px) {
            .nav-links {
                gap: 1rem;
            }
            .banner h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <!-- 导航栏 -->
    <nav>
        <div class="nav-container">
            <div class="logo">🐔 老母鸡真爱守护站</div>
            <ul class="nav-links">
                <li><a href="#home">首页</a></li>
                <li><a href="#about">关于我们</a></li>
                <li><a href="#knowledge">科普专区</a></li>
                <li><a href="#gallery">粉丝投稿</a></li>
                <li><a href="#contact">联系我们</a></li>
            </ul>
        </div>
    </nav>

    <!-- Banner -->
    <section class="banner" id="home">
        <h1>咯咯哒！欢迎来到老母鸡真爱守护站</h1>
        <p>我们用真心热爱每一只老母鸡，记录它们的可爱瞬间，科普它们的温暖故事，让更多人看见老母鸡的美好。</p>
        <a href="#about" class="btn">了解更多</a>
    </section>

    <!-- 老母鸡小档案 -->
    <section class="container">
        <h2 class="section-title">老母鸡小档案</h2>
        <div class="cards">
            <div class="card">
                <div class="card-img">🐔</div>
                <div class="card-content">
                    <h3>温柔的守护者</h3>
                    <p>老母鸡是天生的守护者，会用翅膀护住自己的幼崽，为了保护孩子可以对抗比自己大很多的动物，是世界上最温柔的妈妈之一。</p>
                </div>
            </div>
            <div class="card">
                <div class="card-img">🧠</div>
                <div class="card-content">
                    <h3>超高的智商</h3>
                    <p>老母鸡有超强的记忆力，能认出自己的主人和同伴，会发出不同的叫声对应不同的情绪，甚至能学会简单的指令。</p>
                </div>
            </div>
            <div class="card">
                <div class="card-img">❤️</div>
                <div class="card-content">
                    <h3>治愈的陪伴</h3>
                    <p>它们会用咯咯哒的叫声迎接清晨，会撒娇、会粘人，用一生给我们带来温暖与治愈，是最棒的陪伴型小动物。</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 老母鸡冷知识 -->
    <section class="container" style="background: white; padding: 3rem; border-radius: 15px;">
        <h2 class="section-title">老母鸡冷知识</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
            <div style="padding: 1rem; border-left: 4px solid var(--primary);">✅ 老母鸡能认出100多只同类的脸</div>
            <div style="padding: 1rem; border-left: 4px solid var(--primary);">✅ 老母鸡会做梦，和人类的睡眠周期相似</div>
            <div style="padding: 1rem; border-left: 4px solid var(--primary);">✅ 老母鸡有自己的“语言”，能传递不同信息</div>
            <div style="padding: 1rem; border-left: 4px solid var(--primary);">✅ 老母鸡会数数，能区分数量多少</div>
        </div>
    </section>

    <!-- 关于我们 -->
    <section class="container" id="about">
        <h2 class="section-title">关于我们</h2>
        <div style="max-width: 800px; margin: 0 auto; text-align: center; line-height: 1.8;">
            <p>我们是一群真心喜爱老母鸡的普通人，因为对老母鸡的热爱聚集在这里。</p>
            <p>我们希望通过这个网站，让更多人了解老母鸡的可爱、温柔与智慧，打破对老母鸡的刻板印象，用爱守护每一只老母鸡。</p>
            <p>这里没有商业，只有对老母鸡最纯粹的喜爱。</p>
            <br>
            <a href="#contact" class="btn">加入我们</a>
        </div>
    </section>

    <!-- 页脚 -->
    <footer>
        <p>🐔 老母鸡真爱守护站 | 咯咯哒！用爱守护每一只老母鸡</p>
        <p style="margin-top: 0.5rem; font-size: 0.9rem; opacity: 0.8;">© 2025 老母鸡真爱粉 版权所有</p>
    </footer>
</body>
</html>

