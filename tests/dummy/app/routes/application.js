import Ember from 'ember';

const {
  Route,
} = Ember;

export default Route.extend({
  model() {
    return {
      chartData: {
        labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6'],
        series: [
          [5, 4, 3, 7, 5, 10],
          [3, 2, 9, 5, 4, 6],
          [2, 1, -3, -4, -2, 0],
          [8, -2, 1, 7, -3, 1]
        ]
      }
    };
  }
});
