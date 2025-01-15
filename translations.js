// ===============================
// Translation Data
// ===============================
const translations = {
    en: {
        // Navigation
        "home": "Home",
        "research": "Research",
        "publications": "Publications",
        "members": "Members",
        
        // Common Elements
        "switchLang": "中文 | EN",
        "footer-text": "© 2024 Multi-Modal Detection Lab, Nanjing University of Aeronautics and Astronautics. All rights reserved.",
        
        // Home Page
        "intro-title": "Welcome to Our Lab",
        "intro-p1": "Multi-Modal Detection Lab is affiliated with the College of Computer Science and Technology, Nanjing University of Aeronautics and Astronautics, China. The group is led by Prof. Aimin FENG, and consists of many faculty members and students.\n\nOur research is focused on the field of anomaly detection and we aim to develop advanced methods capable of identifying irregularities and unusual patterns in data. This involves enhancing performance in classification and clustering tasks, achieving better data representation, and reducing human intervention. Our research aims to solve real-world challenges in various sectors, including industrial applications, cybersecurity, and more.",
        "highlight1-title": "Our Research",
        "highlight1-text": "Leading research in multimedia and machine learning",
        "highlight2-title": "Collaboration",
        "highlight2-text": "Strong partnerships with industry and academia",
        "highlight3-title": "Education",
        "highlight3-text": "Training next-generation researchers and engineers",
        "slide1-alt": "Modern Research Laboratory",
        "slide2-alt": "Technology Innovation",
        "slide3-alt": "Team Collaboration",
        
        // News Section
        "news-title": "Latest News & Updates",
        "news1-img-alt": "Lab Members Dinner",
        "news1-title": "Lab Members Gathering",
        "news1-desc": "Our lab members gathered for a wonderful dinner, strengthening our bonds and celebrating our collaborative spirit.",
        "news2-img-alt": "Research Achievement",
        "news2-title": "Paper Accepted at Top Conference",
        "news2-desc": "Our latest work on deep learning for anomaly detection has been accepted at a prestigious conference.",
        "news3-img-alt": "Industry Collaboration",
        "news3-title": "Industry Collaboration",
        "news3-desc": "New partnership established with leading tech company for applied research projects.",
        "news-more": "View All News",
        
        // Research Page
        "selected-research": "-- Selected Research Topics --",
        "research1-title": "Multi-modal Detection",
        "research1-desc-detailed": "Our research focuses on developing advanced techniques for detecting patterns across multiple data modalities including images, text, and signals. We work on creating robust algorithms that can effectively process and analyze data from various sources simultaneously, leading to more accurate and reliable detection systems.",
        "research2-title": "Active Learning",
        "research2-desc-detailed": "In many real-world problems, unlabeled data are often abundant whereas labeled data are scarce. Our research in active learning aims at reducing human efforts on annotating examples in machine learning systems. We develop intelligent sampling strategies and interactive learning frameworks to maximize learning efficiency with minimal human intervention.",
        "research3-title": "Deep Learning",
        "research3-desc-detailed": "Our deep learning research focuses on developing innovative architectures for improved feature extraction and representation learning. We explore advanced neural network designs and training strategies to enhance performance across various applications, from computer vision to natural language processing.",
        "research4-title": "Anomaly Detection",
        "research4-desc-detailed": "We develop advanced methods for identifying irregularities and unusual patterns in complex datasets. Our research combines statistical approaches with modern machine learning techniques to create robust anomaly detection systems that can adapt to various domains and data types.",
        
        // Members Page
        "search-placeholder": "Search members...",
        "filter-all": "All",
        "filter-pi": "Supervisors",
        "filter-student": "Students",
        "member1-name": "Prof. Aimin Feng",
        "member1-role": "Supervisor",
        "member1-bio": "Professor at the College of Computer Science and Technology, Nanjing University of Aeronautics and Astronautics. Research interests include machine learning, deep learning, pattern recognition, and anomaly detection.",
        
        // Students
        "student1-name": "Zhang Wei",
        "student1-role": "PhD Student",
        "student1-bio": "Research focused on deep learning and multi-modal anomaly detection in industrial applications.",
        
        "student2-name": "Li Mei",
        "student2-role": "PhD Student",
        "student2-bio": "Specializing in pattern recognition and machine learning algorithms for multi-modal data analysis.",
        
        "student3-name": "Wang Chen",
        "student3-role": "Master Student",
        "student3-bio": "Working on deep learning approaches for real-time anomaly detection in video streams.",
        
        "student4-name": "Liu Jing",
        "student4-role": "Master Student",
        "student4-bio": "Researching multi-modal fusion techniques for robust anomaly detection systems.",
        
        "student5-name": "Zhao Ming",
        "student5-role": "Master Student",
        "student5-bio": "Developing efficient algorithms for large-scale anomaly detection in industrial IoT systems.",
        
        // Publications Page
        "publications-title": "Publications",
        "search-publications-placeholder": "Search publications...",
        "filter-all": "All Years",
        "filter-2022": "2022",
        "filter-2021": "2021",
        "filter-2019": "2019",
        "filter-2015": "2015",
        "filter-2014": "2014",
        "filter-2008": "2008-2009",
        "filter-2007": "2007"
    },
    zh: {
        // Navigation
        "home": "首页",
        "research": "研究",
        "publications": "出版物",
        "members": "成员",
        
        // Common Elements
        "switchLang": "EN | 中文",
        "footer-text": "© 2024 多模态检测实验室，南京航空航天大学。保留所有权利。",
        
        // Home Page
        "intro-title": "欢迎访问我们的实验室",
        "intro-p1": "多模态检测实验室隶属于南京航空航天大学计算机科学与技术学院。实验室由冯爱民教授领导，由多位教师和学生组成。\n\n我们的研究重点是异常检测领域，旨在开发能够识别数据中不规则和异常模式的先进方法。这包括提高分类和聚类任务的性能，实现更好的数据表示，并减少人工干预。我们的研究旨在解决各个领域的实际挑战，包括工业应用、网络安全等。",
        "highlight1-title": "我们的研究",
        "highlight1-text": "多媒体和机器学习领域的领先研究",
        "highlight2-title": "合作",
        "highlight2-text": "与工业界和学术界的强大合作伙伴关系",
        "highlight3-title": "教育",
        "highlight3-text": "培养下一代研究人员和工程师",
        "slide1-alt": "现代研究实验室",
        "slide2-alt": "技术创新",
        "slide3-alt": "团队协作",
        
        // News Section
        "news-title": "最新消息与更新",
        "news1-img-alt": "实验室成员聚餐",
        "news1-title": "实验室成员聚会",
        "news1-desc": "我们实验室的成员欢聚一堂，共进晚餐，增进情谊，庆祝我们的团队精神。",
        "news2-img-alt": "研究成果",
        "news2-title": "论文被顶级会议接收",
        "news2-desc": "我们关于异常检测的深度学习最新研究成果被知名会议接收。",
        "news3-img-alt": "产业合作",
        "news3-title": "产业合作",
        "news3-desc": "与领先科技公司建立新的应用研究项目合作。",
        "news-more": "查看所有新闻",
        
        // Research Page
        "selected-research": "-- 精选研究课题 --",
        "research1-title": "多模态检测",
        "research1-desc-detailed": "我们的研究致力于开发跨图像、文本和信号等多种数据模态的先进模式检测技术。我们致力于创建能够同时有效处理和分析来自各种来源的数据的强大算法，从而实现更准确和可靠的检测系统。",
        "research2-title": "主动学习",
        "research2-desc-detailed": "在许多现实问题中，未标记数据通常很丰富，而标记数据却很稀少。我们在主动学习方面的研究旨在减少机器学习系统中标注样本的人工工作量。我们开发智能采样策略和交互式学习框架，以最少的人工干预实现最大的学习效率。",
        "research3-title": "深度学习",
        "research3-desc-detailed": "我们的深度学习研究致力于开发创新架构，以改进特征提取和表示学习。我们探索先进的神经网络设计和训练策略，以提高从计算机视觉到自然语言处理等各种应用的性能。",
        "research4-title": "异常检测",
        "research4-desc-detailed": "我们开发先进的方法来识别复杂数据集中的不规则和异常模式。我们的研究将统计方法与现代机器学习技术相结合，创建能够适应各种领域和数据类型的强大异常检测系统。",
        
        // Members Page
        "search-placeholder": "搜索成员...",
        "filter-all": "全部",
        "filter-pi": "导师",
        "filter-student": "学生",
        "member1-name": "冯爱民 教授",
        "member1-role": "导师",
        "member1-bio": "南京航空航天大学计算机科学与技术学院教授。研究方向包括机器学习、深度学习、模式识别和异常检测。",
        
        // Students
        "student1-name": "张伟",
        "student1-role": "博士生",
        "student1-bio": "研究重点是工业应用中的深度学习和多模态异常检测。",
        
        "student2-name": "李梅",
        "student2-role": "博士生",
        "student2-bio": "专注于多模态数据分析的模式识别和机器学习算法。",
        
        "student3-name": "王晨",
        "student3-role": "硕士生",
        "student3-bio": "研究视频流中实时异常检测的深度学习方法。",
        
        "student4-name": "刘静",
        "student4-role": "硕士生",
        "student4-bio": "研究用于稳健异常检测系统的多模态融合技术。",
        
        "student5-name": "赵明",
        "student5-role": "硕士生",
        "student5-bio": "开发工业物联网中大规模异常检测的高效算法。",
        
        // Publications Page
        "publications-title": "出版物",
        "search-publications-placeholder": "搜索出版物...",
        "filter-all": "所有年份",
        "filter-2022": "2022年",
        "filter-2021": "2021年",
        "filter-2019": "2019年",
        "filter-2015": "2015年",
        "filter-2014": "2014年",
        "filter-2008": "2008-2009年",
        "filter-2007": "2007年"
    }
};

// ===============================
// Language Management Functions
// ===============================

let currentLanguage = 'en';

/**
 * Updates the content of the page based on the selected language
 * @param {string} lang - The language code ('en' or 'zh')
 */
function updateContent(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    const elements = document.querySelectorAll('[data-trans]');
    elements.forEach(element => {
        const key = element.getAttribute('data-trans');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'IMG') {
                element.alt = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update language switch button text
    const langSwitch = document.querySelector('.language-switch');
    if (langSwitch) {
        langSwitch.textContent = translations[lang].switchLang;
    }
}

/**
 * Toggles between English and Chinese languages
 */
function toggleLanguage() {
    const newLang = currentLanguage === 'en' ? 'zh' : 'en';
    updateContent(newLang);
    localStorage.setItem('preferredLanguage', newLang);
}

// ===============================
// Initialization
// ===============================

document.addEventListener('DOMContentLoaded', function() {
    // Get preferred language from localStorage or default to 'en'
    const savedLang = localStorage.getItem('preferredLanguage');
    const preferredLanguage = savedLang || 'en';
    
    // Initialize the page with the preferred language
    updateContent(preferredLanguage);
    
    // Add click event listener to language switch button
    const langSwitch = document.querySelector('.language-switch');
    if (langSwitch) {
        langSwitch.addEventListener('click', toggleLanguage);
    }
}); 