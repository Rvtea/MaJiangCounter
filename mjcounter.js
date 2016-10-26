$().ready(function() {
    var dataVM = new Vue({
        el: '#data',
        data: {
            newRound_1: '',
            newRound_2: '',
            newRound_3: '',
            newRound_4: '',
            rounds: [
                // [10, -10, 0, 0],
                // [20, 20, 20, -60],
                // [-9, 0, 9, 0],
                // [-15, 0, 0, 15],
                // [22, 22, -66, 22],
                // [17, -17, 0, 0],
                // [10, -30, 10, 10]
                // just test data
            ]
        },
        computed: {
            newRound: function() {
                let initData = [
                    this.newRound_1,
                    this.newRound_2,
                    this.newRound_3,
                    this.newRound_4
                ];
                var finalData = initData.map((x) => {
                    return parseInt(x.trim());
                });
                return finalData;
                // return [
                //     this.newRound_1,
                //     this.newRound_2,
                //     this.newRound_3,
                //     this.newRound_4
                // ]; // if use <input type="number">
            },
            sumData: function() {
                var sumData = [0, 0, 0, 0];
                this.rounds.map((x) => {
                    console.log(x);
                    sumData = sumData.map((s, index) => (s + x[index]));
                });
                return sumData;
            },
            sumPercentage: function() {
                var sumPer = this.sumData;
                if (!arraysEqual(sumPer, [0, 0, 0, 0])) {
                    console.log('Not Equal to!!')
                    var minValue = Math.min.apply(null, sumPer); // might have a few of them
                    let sumAll = 0;
                    var newArray = sumPer.map((x) => {
                        if (x != minValue) {
                            x = x - minValue;
                        } else {
                            x = 0;
                        }
                        sumAll += x;
                        return x;
                    });
                    var finalPer = newArray.map((x) => {
                        return ((x / sumAll) * 100).toFixed(2);
                    });
                    return finalPer;
                } else {
                    return [0, 0, 0, 0];
                }
            }
        },
        methods: {
            addNewRound: function() {
                this.rounds.push(this.newRound);
                this.newRound_1 = '';
                this.newRound_2 = '';
                this.newRound_3 = '';
                this.newRound_4 = '';
            },
            removeRound: function(index) {
                this.rounds.splice(index, 1);
            }
        }
    });
});

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}