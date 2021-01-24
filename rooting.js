function judgeVegetable(vegetables, metric) {
    vegetables.sort(function (a,b) {
        return b[metric] - a[metric];
      });
      return vegetables[0].submitter
}