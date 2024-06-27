Vue.createApp({
    data() {
        return {
            currentPage: 1,
            totalPages: 4,
            page1: true,
            page2: false,
            page3: false,
            name1: 'LANCE ',
            name2 : 'DEL ROSARIO',
            profilePic: 'https://scontent.fmnl19-1.fna.fbcdn.net/v/t1.15752-9/441729019_1185129549280115_6355664614706063087_n.png?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE7CzLANQ8S-AL2KdNakTzzMVNZDuaJ7mYxU1kO5onuZm0Vz4sd8PBmhC4-sp02pUWLGpW1kmkpmSVNMz5inpBJ&_nc_ohc=WtejpLD9yMcQ7kNvgH72dHx&_nc_ht=scontent.fmnl19-1.fna&oh=03_Q7cD1QER2nnr_VoJb1jx7TMcU7s0Dydnpqly910RR1XzWC8y_g&oe=669E5CF5',
            nameDescription: "Graduate of BS in Computer Engineering in Adamson University Batch 2024. I have built a few projects during my academic journey in the said university.",
            course: 'BS in Computer Engineering'
        };
    },
    methods:{
        changeTitle(){
            this.h1 = 'Lance G. Del Rosario Jr.'
            this.h2 = ''
        },
        nextPage() {
            if (this.currentPage === 1) {
                this.page1 = false;
                this.page2 = true;
                this.page3 = false;
                this.currentPage++;
            } else if (this.currentPage === 2) {
                this.page1 = false;
                this.page2 = false;
                this.page3 = true;
                this.currentPage++;
            } else if (this.currentPage === 3) {
                this.page1 = true;
                this.page2 = false;
                this.page3 = false;
                this.currentPage = 1;
            }
        },
        navMouseHover(){
            document.getElementById('navButton').style.background = 'gray'
        },
        navMouseLeave(){
            document.getElementById('navButton').style.background = 'white'
        }
    }
}).mount('#body');
