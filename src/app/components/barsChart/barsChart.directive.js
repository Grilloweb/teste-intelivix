angular.module('testeIntelivix').
	directive('barsChart', function () {
		var directiveDefinitionObject = {
			restrict: 'E',
			replace: false,
			scope: {data: '=chartData'},
			link: function (scope, element) {
				scope.$watch(function(chartData) {
					return chartData.data },
					function(newValue) {
						if(newValue.length) {
							var chart = d3.select(element[0]);
								chart.append("div").attr("class", "chart")
								.selectAll('div')
								.data(scope.data).enter().append("div")
								.transition().ease("elastic")
								.style("width", function(d) { return d.qtd + "%"; })
								.text(function(d) { if(!d.total) return d.qtd + "%"; else return d.total; });

								chart.append("div").attr("class", "chart2")
									.selectAll('div')
									.data(scope.data).enter().append("div")
									.text(function(d) { return d.uf; });
						}
					}
				);
			}
		};
		return directiveDefinitionObject;
	});
