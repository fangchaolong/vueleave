<template>
    <div>
        数独游戏的实现
    </div>
</template>
<script>
export default {
    name: 'Shudu',
    data() {
        return {
            num: [1,2,3,4,5,6,7,8,9],
            arr: [
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0]
            ]
        }
    },
    created() {
        this.setThird(1,1)
        this.setThird(4,4)
        this.setThird(7,7)
        this.maphang(0)
        this.maphang(1)
        this.maphang(2)
        this.maphang(3)
        this.maphang(4)
        this.maphang(5)
        this.maphang(6)
        this.maphang(7)
        this.maphang(8)
        console.log(this.arr)
    },
    methods: {
        //为对角线上的三个三宫格随机生成。
        setThird (i, j) {
            var numArr = [1,2,3,4,5,6,7,8,9];
            var sortedNumArr= numArr.sort(function(){return Math.random()-0.5>0?-1:1});
            this.arr[i-1][j-1] = sortedNumArr[0]
            this.arr[i-1][j] = sortedNumArr[1]
            this.arr[i-1][j+1] = sortedNumArr[2]
            this.arr[i][j-1] = sortedNumArr[3]
            this.arr[i][j] = sortedNumArr[4]
            this.arr[i][j+1] = sortedNumArr[5]
            this.arr[i+1][j-1] = sortedNumArr[6]
            this.arr[i+1][j] = sortedNumArr[7]
            this.arr[i+1][j+1] = sortedNumArr[8]
        },
        // 便利每一行去除0
        maphang (i) {
            // brr 是每一行已经用的数
            var brr = [... new Set(this.arr[i])]
            if (brr.indexOf(0)>-1) {
                brr.splice(brr.indexOf(0), 1)
            }
            for(var j = 0;j<9;j++){
                if (this.arr[i][j] != 0 ) {
                    continue
                } else {
                    // crr 是每一列已经用的数
                    var crr = [... new Set(this.getlie(j))]
                    if (crr.indexOf(0)>-1) {
                        crr.splice(crr.indexOf(0), 1)
                    }
                    // drr 是当前这一行每一列已经用掉的数
                    var drr = [...new Set(brr.concat(crr))]

                    // frr 是当前小9个格子已经用掉的数
                    var frr = [...new Set(this.getthird(i,j))]
                    if (frr.indexOf(0)>-1) {
                        frr.splice(frr.indexOf(0), 1)
                    }

                    drr = [... new Set(drr.concat(frr))]
                    

                    // err 是当前还可以用的元素
                    var err = this.getArrDifference(drr, this.num)
                    // console.log(brr,crr, err,`第${i+"_"+j}列`)
                    if (err.length>0) {
                        var value = err[Math.floor((Math.random()*err.length))]
                        this.arr[i][j] = value
                        brr.push(value)
                    } else {
                        console.log(brr,frr, crr, err,`第${i+"_"+j}列`)
                    }
                    
                }
            }
        },
        // 获取当前这一列的数字组成的数组
        getlie (i) {
            var arr = []
            for (var j = 0;j<9;j++){
                arr.push(this.arr[j][i])
            }
            return arr
        },
        // 去除两个数组中不同的元素
        getArrDifference (arr1, arr2) {
            return arr1.concat(arr2).filter(function(v, i, arr) {
                return arr.indexOf(v) === arr.lastIndexOf(v);
            });
        },

        // 返回小九宫格的数组
        backarr (i,j) {
            var arr = []
            arr.push(
                this.arr[i-1][j-1],
                this.arr[i-1][j],
                this.arr[i-1][j+1],
                this.arr[i][j-1],
                this.arr[i][j],
                this.arr[i][j+1],
                this.arr[i+1][j-1],
                this.arr[i+1][j],
                this.arr[i+1][j+1],
            )
            return arr
        },
        // 计算当前九宫格已经用了的数
        getthird (i,j) {
            if ( parseInt(i/3) <= 0) {  
                if (parseInt(j/3) <=0) {
                    return this.backarr(1,1)
                } else if (parseInt(j/3) <=1){
                    return this.backarr(1,4)
                } else {
                    return this.backarr(1,7)
                }
            } else if (parseInt(i/3) <=1 ) {
                if (parseInt(j/3) <=0) {
                    return this.backarr(4,1)
                } else if (parseInt(j/3) <=1){
                    return this.backarr(4,4)
                } else {
                    return this.backarr(4,7)
                }
            } else {
                if (parseInt(j/3) <=0) {
                    return this.backarr(7,1)
                } else if (parseInt(j/3) <=1){
                    return this.backarr(7,4)
                } else {
                    return this.backarr(7,7)
                }
            }
        }

    }
}
</script>
