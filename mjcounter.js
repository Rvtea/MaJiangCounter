$().ready(function() {
    var dataVM = new Vue({
        el: '#data',
        data: {
            newPlayer_1: '',
            newPlayer_2: '',
            newPlayer_3: '',
            newPlayer_4: '',
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
                    if (x == '')
                        return 0;
                    else
                        return parseInt(x.trim());
                });
                let minus_index = checkedIndex();
                let sumZero = finalData.reduce((a, b) => a + b, 0);
                finalData[minus_index] = -1 * sumZero;
                return finalData;
            },
            winRoundInfo: function() {
                var initial = [0, 0, 0, 0];
                this.rounds.map((x) => {
                    x.map((y, idx) => {
                        if (y < 0) initial[idx]++;
                    });
                });
                return initial;
            },
            sumData: function() {
                var sumData = [0, 0, 0, 0];
                this.rounds.map((x) => {
                    sumData = sumData.map((s, index) => (s + x[index]));
                });
                return sumData;
            },
            sumPercentage: function() {
                var sumPer = this.sumData;
                if (!arraysEqual(sumPer, [0, 0, 0, 0])) {
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
            inputPlayer: function($event) {
                let wholePlayer = [this.newPlayer_1, this.newPlayer_2, this.newPlayer_3, this.newPlayer_4];
                let currentPlayer = '#' + event.target.parentElement.parentElement.id;
                let currentId = parseInt(currentPlayer.substring(11)) - 1;
                if (wholePlayer[currentId] != '') {
                    $(currentPlayer).text(wholePlayer[currentId]); // avoid using html()
                    $(currentPlayer).css("font-size", "24px");
                    $(currentPlayer).css("font-weight", "bold")
                } else {
                    alert("The player name is not allowed empty.");
                }
            },
            addNewRound: function() {
                this.rounds.push(this.newRound);
                this.newRound_1 = '';
                this.newRound_2 = '';
                this.newRound_3 = '';
                this.newRound_4 = '';
            },
            removeRound: function(index) {
                if (confirm("Are you sure to delete this row?")) {
                    this.rounds.splice(index, 1);
                }
            }
        }
    });
    $('input:radio').change(
        function() {
            let minus_index = checkedIndex();
            var box = $('input.numberbox');
            for (let i = 0; i < box.length; i++) {
                if (i == minus_index) {
                    $(box[i]).attr("disabled", true);
                } else {
                    $(box[i]).attr("disabled", false);
                }
            }

        }
    );
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

function checkedIndex() {
    var radios = $('input.hidden');
    for (var i = 0; i < radios.length; i++) {
        if ($(radios[i]).prop('checked')) {
            return i;
        }
    }
}