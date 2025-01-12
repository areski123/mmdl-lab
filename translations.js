const translations = {
    en: {
        home: "Home",
        projects: "Projects",
        publications: "Publications",
        members: "Members",
        events: "Events",
        contact: "Contact",
        welcome: "Welcome to MMLB",
        switchLang: "中文 | EN",
        "search-placeholder": "Search members...",
        "filter-all": "All",
        "filter-pi": "Supervisors",
        "filter-researcher": "Researchers",
        "filter-student": "Students",
        "member1-name": "Prof. Name",
        "member1-role": "Supervisor",
        "member1-bio": "Brief biography about the member and their research interests.",
        "recent-publications": "Recent Publications",
        "publication1": "Publication Title 1 (2023)",
        "publication2": "Publication Title 2 (2022)",
        "interest1": "Machine Learning",
        "interest2": "Computer Vision",
        "member2-name": "John Doe",
        "member2-role": "PhD Student",
        "member2-bio": "Research focused on deep learning applications in computer vision and natural language processing.",
        "publication3": "Student Publication 1 (2023)",
        "interest3": "Deep Learning",
        "interest4": "Natural Language Processing",
        "slide1-alt": "Modern Research Laboratory",
        "slide2-alt": "Technology Innovation",
        "slide3-alt": "Team Collaboration",
        "footer-text": "© 2024 Multi-Modal Detection Lab, Nanjing University of Aeronautics and Astronautics. All rights reserved."
    },
    zh: {
        home: "首页",
        projects: "项目",
        publications: "出版物",
        members: "成员",
        events: "活动",
        contact: "联系我们",
        welcome: "欢迎来到 MMLB",
        switchLang: "EN | 中文",
        "search-placeholder": "搜索成员...",
        "filter-all": "全部",
        "filter-pi": "导师",
        "filter-researcher": "研究人员",
        "filter-student": "学生",
        "member1-name": "教授姓名",
        "member1-role": "导师",
        "member1-bio": "成员简介及研究兴趣。",
        "recent-publications": "最新发表",
        "publication1": "论文标题 1 (2023)",
        "publication2": "论文标题 2 (2022)",
        "interest1": "机器学习",
        "interest2": "计算机视觉",
        "member2-name": "约翰·多伊",
        "member2-role": "博士生",
        "member2-bio": "研究重点是计算机视觉和自然语言处理中的深度学习应用。",
        "publication3": "学生论文 1 (2023)",
        "interest3": "深度学习",
        "interest4": "自然语言处理",
        "slide1-alt": "现代研究实验室",
        "slide2-alt": "技术创新",
        "slide3-alt": "团队协作",
        "footer-text": "© 2024 多模态检测实验室，南京航空航天大学。保留所有权利。"
    }
};

function updateContent(lang) {
    // Update all elements with data-trans attribute
    document.querySelectorAll('[data-trans]').forEach(element => {
        const key = element.getAttribute('data-trans');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.getAttribute('placeholder')) {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update language switch button
    document.querySelector('.language-switch').textContent = translations[lang].switchLang;
} 