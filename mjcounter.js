$().ready(function() {
    var dataVM = new Vue({
        el: '#data',
        data: {
            newRound_1: '',
            newRound_2: '',
            newRound_3: '',
            newRound_4: '',
            rounds: []
                //     [0, 0, 0, 0] // initial value
                // ]
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
            },
            sumData: function() {
                console.log('process sumData ...');
                var sumData = [0, 0, 0, 0];
                console.log(this.rounds);
                this.rounds.map((x) => {
                    console.log(x);
                    sumData = sumData.map((s, index) => (s + x[index]));
                });
                console.log(sumData);
                return sumData;
            },
            sumPercentage: function() {
                console.log('process sumPercentage ...');
                var sumPer = this.sumData;
                console.log(sumPer);
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
                    console.log(minValue);
                    console.log(sumAll);
                    console.log(newArray);
                    var tt = newArray.map((x) => {
                        return ((x / sumAll) * 100).toFixed(2);
                    });
                    console.log(tt);
                    return tt;
                } else {
                    return [0, 0, 0, 0];
                }
            }
        },
        methods: {
            addNewRound: function() {
                console.log('process addNewRound ...');
                console.log(this.newRound);
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

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}