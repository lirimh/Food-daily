
let chartConfig = {
  globals: {
    fontFamily: 'Roboto'
  },
  graphset: [
  {//pie #1
 	  type: 'pie', 
 	  backgroundColor: 'transparent',
 	  x: '0%',
 	  y: '0%',
 	  width: '25%',
 	  height: '100%',
 	  mediaRules: [
 	  {//changes layout at 500 pixels or less
 	    maxWidth: 500,
 	    x: '0%',
       y: '-16%',
 	    width: '100%',
 	    height: '100%',
 	  }
     ],
     legend: {
      margin: 'auto auto 0% auto',
      backgroundColor: 'none',
      borderWidth: '0px',
      item: {
        color: '%backgroundcolor',
        fontSize: '17px',
        fontFamily: 'sans-serif'
      },
      layout: 'float',
      marker: {
        borderRadius: '30px',
        borderWidth: '0px'
      },
      shadow: false
    },
     plot: {
      tooltip: {
        text: '%v TB',
        borderRadius: '3px',
        shadow: false
      },
      valueBox: {
        visible: false
      },
      marginRight: '100px',
      borderWidth: '0px',
      shadow: false,
     size: "100px",
      slice: 92
    },
    labels: [{
      text: '<span style=\'font-size:18px; color:#D9DEE2\'>Total rates</span><br>55',
      fontSize: '60px',
      fontFamily: 'arial',
      width: '10%',
      x: '44%',
      y: '42%'
    },],
    series: [{
      text: 'Good',
      values: [36],
      backgroundColor: '#D9DEE2'
    },
    {
      text: 'Ok',
      values: [7],
      backgroundColor: '#EC6221'
    },
    {
      text: 'Bad',
      values: [12],
      backgroundColor: '#7BA036'
    },
  ]
  },
]
};

var myConfig2 = {
  globals: {
    fontFamily: 'Roboto'
  },
  graphset: [
  {//pie #1
 	  type: 'pie', 
 	  backgroundColor: 'transparent',
 	  x: '0%',
 	  y: '0%',
 	  width: '25%',
 	  height: '100%',
 	  mediaRules: [
 	  {//changes layout at 500 pixels or less
 	    maxWidth: 500,
 	    x: '0%',
       y: '-13%',
 	    width: '100%',
 	    height: '100%',
 	  }
     ],
     legend: {
      margin: 'auto auto 0% auto',
      backgroundColor: 'none',
      borderWidth: '0px',
      item: {
        color: '%backgroundcolor',
        fontSize: '17px',
        fontFamily: 'sans-serif'
      },
      layout: 'float',
      marker: {
        borderRadius: '30px',
        borderWidth: '0px'
      },
      shadow: false
    },
     plot: {
      tooltip: {
        text: '%v TB',
        borderRadius: '3px',
        shadow: false
      },
      valueBox: {
        visible: false
      },
      marginRight: '100px',
      borderWidth: '0px',
      shadow: false,
     size: "100px",
      slice: 92
    },
    labels: [{
      text: '<span style=\'font-size:18px; color:#D9DEE2\'>Total</span><br>61',
      fontSize: '60px',
      fontFamily: 'arial',
      width: '10%',
      x: '44%',
      y: '42%'
    },],
	   series: [{
        text: 'Good',
        values: [68],
        backgroundColor: '#7BA036'
      },
      {
        text: 'Bad',
        values: [32],
        backgroundColor: '#EC6221'
      },
      
    ]
  },
]
};

let chartConfig3 = {
  globals: {
    fontFamily: 'Roboto'
  },
  graphset: [
  {//pie #1
 	  type: 'pie', 
 	  backgroundColor: 'transparent',
 	  x: '0%',
 	  y: '0%',
 	  width: '25%',
 	  height: '100%',
 	  mediaRules: [
 	  {//changes layout at 500 pixels or less
 	    maxWidth: 500,
 	    x: '0%',
       y: '-13%',
 	    width: '100%',
 	    height: '100%',
 	  }
     ],
     legend: {
      margin: 'auto auto 0% auto',
      backgroundColor: 'none',
      borderWidth: '0px',
      item: {
        color: '%backgroundcolor',
        fontSize: '17px',
        fontFamily: 'sans-serif'
      },
      layout: 'float',
      marker: {
        borderRadius: '30px',
        borderWidth: '0px'
      },
      shadow: false
    },
     plot: {
      tooltip: {
        text: '%v TB',
        borderRadius: '3px',
        shadow: false
      },
      valueBox: {
        visible: false
      },
      marginRight: '100px',
      borderWidth: '0px',
      shadow: false,
     size: "100px",
      slice: 92
    },
    labels: [{
      text: '<span style=\'font-size:18px; color:#D9DEE2\'>Total</span><br>36',
      fontSize: '60px',
      fontFamily: 'arial',
      width: '10%',
      x: '44%',
      y: '42%'
    },],
	   series: [{
        text: 'Good',
        values: [72],
        backgroundColor: '#7BA036'
      },
      {
        text: 'Bad',
        values: [28],
        backgroundColor: '#EC6221'
      },
      
    ]
  },
]
};

zingchart.render({
  id: 'myChart',
  data: chartConfig,
  height: "100%",
  width: "100%"
});

zingchart.render({
  id: 'myChart3',
  data: chartConfig3,
  height: "100%",
  width: "100%"
});

zingchart.render({ 
	id : 'myChart2', 
	data : myConfig2, 
		height: '400px', 
	width: '100%' 
});


