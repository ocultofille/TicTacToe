
        let winnerindex = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        let flag = true;

        let player1;
        let player2 ;
        let tdp1=document.querySelector('.pla1');
        let tdp2=document.querySelector('.pla2');
        let arr = [0, 1, 0, 1, 0, 1, 1, 0, 1];

        let main2div = document.querySelector('.main2').style;


        let score1 = document.querySelector('.s1');
        let score2 = document.querySelector('.s2');
        let p1score = 0;
        let p2score = 0;


        document.querySelector('.grid').addEventListener('click', function (e) {
            // console.log(e.target.innerHTML);
            var index= e.target.id;
            if (arr[index] == 0||arr[index] == 1) {
                e.target.innerHTML = getval();
                arr[e.target.id] = getval(); 
                console.log(arr);
                flag = !flag;
                winner();
            }
            else{
            alert('not allowed');
        }
            
        });



        function getval() {
            return (flag) ? 'X' : 'O';
        }
        // function winner() {
        //     if ((arr[0] == arr[1] && arr[1] == arr[2]) || (arr[3] == arr[4] && arr[4] == arr[5]) || (arr[6] == arr[7] && arr[7] == arr[8])) {
        //         console.log("row winner");
        //     }
        //     if ((arr[0] == arr[3] && arr[3] == arr[6]) || (arr[1] == arr[4] && arr[4] == arr[7]) || (arr[2] == arr[5] && arr[5] == arr[8])) {
        //         console.log("column winner");
        //     }
        //     if ((arr[0] == arr[4] && arr[4] == arr[8]) || (arr[2] == arr[4] && arr[4] == arr[6])) {
        //         console.log("diagonal winner");
        //     }
        // }

        function winner() {
            for (let i = 0; i < winnerindex.length; i++) {
                let [a, b, c] = winnerindex[i];//destracturing
                if (arr[a] == arr[b] && arr[b] == arr[c]) {

                    getscore(a, b, c);
                    
                    break;
                }
            }
        }

        function reset() {

            let store = document.querySelectorAll('.fun');
            for (let i = 0; i < arr.length; i++) {
                store[i].innerHTML = '';
               document.querySelectorAll('.fun')[i].style.backgroundColor="none";
            }
            arr = [0, 1, 0, 1, 0, 1, 1, 0, 1];

            flag = true;
        }
        

        function restart1() {

            if (document.getElementById('div2')) {

                if (document.getElementById('div2').style.display == 'none') {
                    document.getElementById('div2').style.display = 'block';
                    document.getElementById('div1').style.display = 'none';
                }
                else {
                    document.getElementById('div2').style.display = 'none';
                    document.getElementById('div1').style.display = 'block';
                }

            }
            score1.innerHTML=0;
            score2.innerHTML=0;
        }

        function getscore(x, y, z) {
            player1=document.querySelector('.p1');
            player2=document.querySelector('.p2');
            if (flag) {
                p2score++;
                alert(document.querySelector('.pla2').innerHTML+' is winner');
                console.log(document.querySelector('.pla2').innerHTML);
            }
            else {

                p1score++;
                
                alert(document.querySelector('.pla1').innerHTML+' is winner');
                console.log(document.querySelector('.pla1').innerHTML);

               
            }

            // (flag)?p1score++ : p2score++;
             score1.innerHTML=p1score;
             score2.innerHTML=p2score;
             console.log()
            document.getElementsByClassName('fun')[x].style.backgroundColor = 'yellow';
            document.getElementsByClassName('fun')[y].style.backgroundColor = 'yellow';
            document.getElementsByClassName('fun')[z].style.backgroundColor = 'yellow';
            arr=[];
        }

        document.querySelector('.start').addEventListener('click',function(){
            player1=document.querySelector('.p1').value;
            player2=document.querySelector('.p2').value;
            if(player1== ''||player2== ''){
                alert('Please Enter Players Name ');
            }
            else{
                document.querySelector('.main').style.display="block";
                document.querySelector('.main2').style.display="none";
                tdp1.innerHTML=player1;
                tdp2.innerHTML=player2;
            }
            
        }) ;
        // {
        //     if (player1.value != null && player2.value != null)
        //      {
        //         if (document.getElementById('div1')) {

        //             if (document.getElementById('div1').style.display == 'none') {
        //                 document.getElementById('div1').style.display = 'block';
        //                 document.getElementById('div2').style.display = 'none';
        //             }
        //             else {
        //                 document.getElementById('div1').style.display = 'none';
        //                 document.getElementById('div2').style.display = 'block';
        //             }
        //         }
        //         document.querySelector('.pla1').innerHTML = player1.value;
        //         document.querySelector('.pla2').innerHTML = player2.value;
                
        //     }
        //     else{
        //         alert("plese fill the players name");
        //     }
        //     player1.value = '';
        //         player2.value = ''

        // }

