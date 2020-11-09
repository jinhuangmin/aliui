$(function() {
  // 模板数据
  const DATA = [
    {
      pcId: 337,
      wxId: 377,
      color: 3,
      industry: [1],
      image: "https://img.alicdn.com//tfscom/i4/TB1mm4YouSSBuNjy0FlXXbBpVXa",
    },
    {
      pcId: 375,
      wxId: 376,
      color: 3,
      industry: [3],
      image: "https://img.alicdn.com//tfscom/i4/TB1DqD0vrorBKNjSZFjXXc_SpXa",
    },
    {
      pcId: 458,
      wxId: 1899,
      color: 3,
      industry: [1],
      image: "https://img.alicdn.com//tfscom/i4/TB1xYghj4tnkeRjSZSgXXXAuXXa",
    },
    {
      pcId: 556,
      wxId: 941,
      color: 12,
      industry: [10],
      image: "https://img.alicdn.com//tfscom/i4/TB1_F1npgZC2uNjSZFnXXaxZpXa",
    },
    {
      pcId: 675,
      wxId: 1874,
      color: 2,
      industry: [3],
      image: "https://img.alicdn.com//tfscom/i1/TB1GWNebQ9E3KVjSZFGXXc19XXa",
    },
    {
      pcId: 1173,
      wxId: 2210,
      color: 12,
      industry: [10],
      image: "https://img.alicdn.com//tfscom/i1/TB1jT5UCwmTBuNjy1XbXXaMrVXa",
    },

    // {
    //   pcId: 1216,
    //   wxId: 1352,

    //   color: 7,
    //   industry: [53],
    //   image: "https://img.alicdn.com//tfscom/i3/TB15GZkvljTBKNjSZFuXXb0HFXa",
    // },
    // {
    //   pcId: 1273,
    //   wxId: 1908,

    //   color: 8,
    //   industry: [50, 66],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1azMev_qWBKNjSZFAXXanSpXa",
    // },
    // {
    //   pcId: 1542,
    //   wxId: 2175,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i3/TB12e5MDACWBuNjy0FaXXXUlXXa",
    // },
    // {
    //   pcId: 1569,
    //   wxId: 1993,

    //   color: 8,
    //   industry: [68],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1CKOSrpkoBKNjSZFEXXbrEVXa",
    // },
    // {
    //   pcId: 1572,
    //   wxId: 1963,

    //   color: 8,
    //   industry: [50, 66],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1wPMrv5AnBKNjSZFvXXaTKXXa",
    // },
    // {
    //   pcId: 1590,
    //   wxId: 2016,

    //   color: 8,
    //   industry: [52],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1pwEtv77mBKNjSZFyXXbydFXa",
    // },

    // {
    //   pcId: 1604,
    //   wxId: 1913,

    //   color: 8,
    //   industry: [60],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1sRdQEVOWBuNjy0FiXXXFxVXa",
    // },
    // {
    //   pcId: 1634,
    //   wxId: 2280,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1eD4xEVGWBuNjy0FbXXb4sXXa",
    // },
    // {
    //   pcId: 1662,
    //   wxId: 2197,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1YtYOFrSYBuNjSspiXXXNzpXa",
    // },
    // {
    //   pcId: 1715,
    //   wxId: 1928,

    //   color: 8,
    //   industry: [50, 66],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1HYkdvVkoBKNjSZFEXXbrEVXa",
    // },
    // {
    //   pcId: 1718,
    //   wxId: 2043,

    //   color: 8,
    //   industry: [50, 66],
    //   image: "https://img.alicdn.com//tfscom/i1/TB18QAhv8smBKNjSZFsXXaXSVXa",
    // },
    // {
    //   pcId: 1790,
    //   wxId: 2014,

    //   color: 8,
    //   industry: [68],
    //   image: "https://img.alicdn.com//tfscom/i2/TB17cBGXRWD3KVjSZKPXXap7FXa",
    // },

    // {
    //   pcId: 1925,
    //   wxId: 1991,

    //   color: 8,
    //   industry: [64],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1KPrqoYvpK1RjSZPiXXbmwXXa",
    // },
    // {
    //   pcId: 2882,
    //   wxId: 5865,

    //   color: 8,
    //   industry: [60],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1NnCQbBWD3KVjSZKPXXap7FXa",
    // },
    // {
    //   pcId: 2960,
    //   wxId: 3030,

    //   color: 8,
    //   industry: [54],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1whE.n7PoK1RjSZKbXXX1IXXa",
    // },
    // {
    //   pcId: 2988,
    //   wxId: 3055,

    //   color: 8,
    //   industry: [68],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1v_uIojDpK1RjSZFrXXa78VXa",
    // },
    // {
    //   pcId: 3094,
    //   wxId: 4485,

    //   color: 8,
    //   industry: [52],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1jBpRrmzqK1RjSZPcXXbTepXa",
    // },
    // {
    //   pcId: 3184,
    //   wxId: 4510,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1vB3vnX67gK0jSZPfXXahhFXa",
    // },

    // {
    //   pcId: 4240,
    //   wxId: 5866,

    //   color: 8,
    //   industry: [53],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1jo0kM4TpK1RjSZFMXXbG_VXa",
    // },
    // {
    //   pcId: 4274,
    //   wxId: 5863,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1wAFrKNTpK1RjSZFMXXbG_VXa",
    // },
    // {
    //   pcId: 4275,
    //   wxId: 5469,

    //   color: 8,
    //   industry: [64],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1NGpkMVYqK1RjSZLeXXbXppXa",
    // },
    // {
    //   pcId: 4295,
    //   wxId: 5864,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1gAheM9zqK1RjSZFLXXcn2XXa",
    // },
    // {
    //   pcId: 4401,
    //   wxId: 5859,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1zL7nN4TpK1RjSZR0XXbEwXXa",
    // },
    // {
    //   pcId: 4456,
    //   wxId: 5857,

    //   color: 8,
    //   industry: [50, 64],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1YfF_O5rpK1RjSZFhXXXSdXXa",
    // },

    // {
    //   pcId: 4557,
    //   wxId: 5242,

    //   color: 8,
    //   industry: [53],
    //   image: "https://img.alicdn.com//tfscom/i2/TB14b4abLWG3KVjSZFgXXbTspXa",
    // },
    // {
    //   pcId: 4563,
    //   wxId: 5683,

    //   color: 8,
    //   industry: [54],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1uG7_bA9E3KVjSZFGXXc19XXa",
    // },
    // {
    //   pcId: 4580,
    //   wxId: 5188,

    //   color: 8,
    //   industry: [63],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1gt7_bwmH3KVjSZKzXXb2OXXa",
    // },
    // {
    //   pcId: 4587,
    //   wxId: 5701,

    //   color: 8,
    //   industry: [52],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1yFeMbv1H3KVjSZFHXXbKppXa",
    // },
    // {
    //   pcId: 4608,
    //   wxId: 5251,

    //   color: 8,
    //   industry: [58],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1GZI.bBaE3KVjSZLeXXXsSFXa",
    // },
    // {
    //   pcId: 4620,
    //   wxId: 5304,

    //   color: 8,
    //   industry: [50, 64],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1WBs8bwmH3KVjSZKzXXb2OXXa",
    // },

    // {
    //   pcId: 4624,
    //   wxId: 5699,

    //   color: 8,
    //   industry: [54],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1JlE.bAWE3KVjSZSyXXXocXXa",
    // },
    // {
    //   pcId: 4639,
    //   wxId: 5256,

    //   color: 8,
    //   industry: [50, 64],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1_SU_bEGF3KVjSZFmXXbqPXXa",
    // },
    // {
    //   pcId: 4656,
    //   wxId: 5714,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1GZBabRSD3KVjSZFqXXc4bpXa",
    // },
    // {
    //   pcId: 4668,
    //   wxId: 5511,

    //   color: 8,
    //   industry: [50, 64],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1ujw_bCSD3KVjSZFKXXb10VXa",
    // },
    // {
    //   pcId: 4677,
    //   wxId: 5709,

    //   color: 8,
    //   industry: [50, 64, 68],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1LvQYakxz61VjSZFrXXXeLFXa",
    // },
    // {
    //   pcId: 4688,
    //   wxId: 5309,

    //   color: 8,
    //   industry: [58],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1QETdUgDqK1RjSZSyXXaxEVXa",
    // },

    // {
    //   pcId: 4694,
    //   wxId: 5708,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1zgg.bv1G3KVjSZFkXXaK4XXa",
    // },
    // {
    //   pcId: 4703,
    //   wxId: 5718,

    //   color: 8,
    //   industry: [65],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1c9s_bBWD3KVjSZFsXXcqkpXa",
    // },
    // {
    //   pcId: 4723,
    //   wxId: 5259,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1ap4XbRWD3KVjSZFsXXcqkpXa",
    // },
    // {
    //   pcId: 4725,
    //   wxId: 5474,

    //   color: 8,
    //   industry: [50, 64],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1FeU9bEGF3KVjSZFoXXbmpFXa",
    // },
    // {
    //   pcId: 4746,
    //   wxId: 5720,

    //   color: 8,
    //   industry: [65],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1a4pjbHys3KVjSZFnXXXFzpXa",
    // },
    // {
    //   pcId: 4765,
    //   wxId: 5722,

    //   color: 8,
    //   industry: [50, 64],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1ASdhbHys3KVjSZFnXXXFzpXa",
    // },

    // {
    //   pcId: 4779,
    //   wxId: 5727,

    //   color: 8,
    //   industry: [50, 64, 68],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1TEc9bEGF3KVjSZFoXXbmpFXa",
    // },
    // {
    //   pcId: 4790,
    //   wxId: 5728,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1niNabSWD3KVjSZSgXXcCxVXa",
    // },
    // {
    //   pcId: 4792,
    //   wxId: 5725,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1SaNdaQT2gK0jSZFkXXcIQFXa",
    // },
    // {
    //   pcId: 4809,
    //   wxId: 5730,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i4/TB11a4gbG1s3KVjSZFAXXX_ZXXa",
    // },
    // {
    //   pcId: 4821,
    //   wxId: 5744,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i1/TB14Pdcflv0gK0jSZKbXXbK2FXa",
    // },
    // {
    //   pcId: 4822,
    //   wxId: 5739,

    //   color: 8,
    //   industry: [54],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1KsyNbECF3KVjSZJnXXbnHFXa",
    // },

    // {
    //   pcId: 4834,
    //   wxId: 5308,

    //   color: 8,
    //   industry: [64],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1xqA.aAH0gK0jSZPiXXavapXa",
    // },
    // {
    //   pcId: 4839,
    //   wxId: 5247,

    //   color: 8,
    //   industry: [53],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1.HhAX81D3KVjSZFyXXbuFpXa",
    // },
    // {
    //   pcId: 4853,
    //   wxId: 5754,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1Wci7bBWD3KVjSZKPXXap7FXa",
    // },
    // {
    //   pcId: 4855,
    //   wxId: 5749,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1ylktXYys3KVjSZFnXXXFzpXa",
    // },
    // {
    //   pcId: 4886,
    //   wxId: 5747,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1gna3bv1H3KVjSZFHXXbKppXa",
    // },
    // {
    //   pcId: 4887,
    //   wxId: 5777,

    //   color: 8,
    //   industry: [52, 65],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1l3m.bBCw3KVjSZFlXXcJkFXa",
    // },

    // {
    //   pcId: 4914,
    //   wxId: 5778,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1A8uRakxz61VjSZFtXXaDSVXa",
    // },
    // {
    //   pcId: 4915,
    //   wxId: 5756,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1IKyNbv1H3KVjSZFHXXbKppXa",
    // },
    // {
    //   pcId: 4935,
    //   wxId: 5781,

    //   color: 8,
    //   industry: [50, 64],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1V.FXbUGF3KVjSZFoXXbmpFXa",
    // },
    // {
    //   pcId: 4940,
    //   wxId: 5782,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1mo9Aakxz61VjSZFtXXaDSVXa",
    // },
    // {
    //   pcId: 4970,
    //   wxId: 5785,

    //   color: 8,
    //   industry: [54],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1pQHmbL5G3KVjSZPxXXbI3XXa",
    // },
    // {
    //   pcId: 4986,
    //   wxId: 5507,

    //   color: 8,
    //   industry: [58],
    //   image: "https://img.alicdn.com//tfscom/i1/TB17LbsbG5s3KVjSZFNXXcD3FXa",
    // },

    // {
    //   pcId: 5050,
    //   wxId: 5791,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1EseucG1s3KVjSZFAXXX_ZXXa",
    // },
    // {
    //   pcId: 5099,
    //   wxId: 5185,

    //   color: 8,
    //   industry: [63],
    //   image: "https://img.alicdn.com//tfscom/i4/TB18mCXdxiH3KVjSZPfXXXBiVXa",
    // },
    // {
    //   pcId: 5171,
    //   wxId: 5786,

    //   color: 8,
    //   industry: [51],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1Grtfev1G3KVjSZFkXXaK4XXa",
    // },
    // {
    //   pcId: 5200,
    //   wxId: 5794,

    //   color: 8,
    //   industry: [58],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1YiueeYus3KVjSZKbXXXqkFXa",
    // },
    // {
    //   pcId: 5210,
    //   wxId: 5518,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i4/TB10l_VeWSs3KVjSZPiXXcsiVXa",
    // },
    // {
    //   pcId: 5276,
    //   wxId: 5811,

    //   color: 8,
    //   industry: [60],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1chJ3bfb2gK0jSZK9XXaEgFXa",
    // },

    // {
    //   pcId: 5316,
    //   wxId: 5812,

    //   color: 8,
    //   industry: [68],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1pbQYalr0gK0jSZFnXXbRRXXa",
    // },
    // {
    //   pcId: 5349,
    //   wxId: 5813,

    //   color: 8,
    //   industry: [53],
    //   image: "https://img.alicdn.com//tfscom/i1/TB13i0gaUT1gK0jSZFhXXaAtVXa",
    // },
    // {
    //   pcId: 5391,
    //   wxId: 5814,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1cSEba7H0gK0jSZPiXXavapXa",
    // },
    // {
    //   pcId: 5405,
    //   wxId: 5821,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1BH86bbj1gK0jSZFOXXc7GpXa",
    // },
    // {
    //   pcId: 5409,
    //   wxId: 5823,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1GvqzbkT2gK0jSZFkXXcIQFXa",
    // },
    // {
    //   pcId: 5426,
    //   wxId: 5830,

    //   color: 8,
    //   industry: [63],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1ezscbkH0gK0jSZPiXXavapXa",
    // },

    // {
    //   pcId: 5437,
    //   wxId: 5828,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1TMtAbBr0gK0jSZFnXXbRRXXa",
    // },
    // {
    //   pcId: 5445,
    //   wxId: 5837,

    //   color: 8,
    //   industry: [68],
    //   image: "https://img.alicdn.com//tfscom/i2/TB19vV8buH2gK0jSZJnXXaT1FXa",
    // },
    // {
    //   pcId: 5465,
    //   wxId: 5838,

    //   color: 8,
    //   industry: [63],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1zku3bNv1gK0jSZFFXXb0sXXa",
    // },
    // {
    //   pcId: 5501,
    //   wxId: 5841,

    //   color: 8,
    //   industry: [54],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1vhqcb2b2gK0jSZK9XXaEgFXa",
    // },
    // {
    //   pcId: 5503,
    //   wxId: 5840,

    //   color: 8,
    //   industry: [52],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1f9H1e4D1gK0jSZFyXXciOVXa",
    // },
    // {
    //   pcId: 5536,
    //   wxId: 5855,

    //   color: 8,
    //   industry: [54],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1O3Xjci_1gK0jSZFqXXcpaXXa",
    // },

    // {
    //   pcId: 5571,
    //   wxId: 5843,

    //   color: 8,
    //   industry: [58],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1V.eWcEY1gK0jSZFMXXaWcVXa",
    // },
    // {
    //   pcId: 5573,
    //   wxId: 5844,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1wv58crr1gK0jSZR0XXbP8XXa",
    // },
    // {
    //   pcId: 5607,
    //   wxId: 5849,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1Sh49cQT2gK0jSZPcXXcKkpXa",
    // },
    // {
    //   pcId: 5617,
    //   wxId: 5848,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1JZigcO_1gK0jSZFqXXcpaXXa",
    // },
    // {
    //   pcId: 5987,
    //   wxId: 5860,

    //   color: 8,
    //   industry: [52, 63],
    //   image: "https://img.alicdn.com//tfscom/i2/TB18S3Te7L0gK0jSZFAXXcA9pXa",
    // },
    // {
    //   pcId: 6731,
    //   wxId: 6754,

    //   color: 8,
    //   industry: [58],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1W.O9qYY1gK0jSZTEXXXDQVXa",
    // },

    // {
    //   pcId: 6757,
    //   wxId: 6831,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1j5Iqq7L0gK0jSZFxXXXWHVXa",
    // },
    // {
    //   pcId: 6836,
    //   wxId: 6853,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1T1sWq1H2gK0jSZFEXXcqMpXa",
    // },
    // {
    //   pcId: 6850,
    //   wxId: 6863,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1uwXXrHj1gK0jSZFOXXc7GpXa",
    // },
    // {
    //   pcId: 6870,
    //   wxId: 6878,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1NRxWrUT1gK0jSZFhXXaAtVXa",
    // },
    // {
    //   pcId: 6877,
    //   wxId: 6897,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1IKM8rAL0gK0jSZFAXXcA9pXa",
    // },
    // {
    //   pcId: 6891,
    //   wxId: 6903,

    //   color: 8,
    //   industry: [64],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1afmDrrj1gK0jSZFOXXc7GpXa",
    // },

    // {
    //   pcId: 6912,
    //   wxId: 6936,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1ABbQsAP2gK0jSZPxXXacQpXa",
    // },
    // {
    //   pcId: 6922,
    //   wxId: 6956,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1Xx4AtV67gK0jSZPfXXahhFXa",
    // },
    // {
    //   pcId: 6954,
    //   wxId: 6972,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com/tfscom/i2/TB1eWQUtYr1gK0jSZFDXXb9yVXa",
    // },
    // {
    //   pcId: 6957,
    //   wxId: 6977,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com/tfscom/i4/TB1Tx6FtF67gK0jSZPfXXahhFXa",
    // },
    // {
    //   pcId: 6978,
    //   wxId: 7034,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com/tfscom/i3/TB1VGrot1L2gK0jSZFmXXc7iXXa",
    // },
    // {
    //   pcId: 7021,
    //   wxId: 7043,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com/tfscom/i4/TB1yFg1t4z1gK0jSZSgXXavwpXa",
    // },

    // {
    //   pcId: 7059,
    //   wxId: 7077,

    //   color: 8,
    //   industry: [64, 60],
    //   image: "https://img.alicdn.com/tfscom/i1/TB1hOZztYH1gK0jSZFwXXc7aXXa",
    // },
    // {
    //   pcId: 7060,
    //   wxId: 7095,

    //   color: 8,
    //   industry: [50],
    //   image: "https://img.alicdn.com/tfscom/i4/TB1h1IgtET1gK0jSZFhXXaAtVXa",
    // },
    // {
    //   pcId: 7096,
    //   wxId: 7107,

    //   color: 8,
    //   industry: [58],
    //   image: "https://img.alicdn.com/tfscom/i1/TB1kUVguxD1gK0jSZFsXXbldVXa",
    // },
    // {
    //   pcId: 7224,
    //   wxId: 7232,

    //   color: 8,
    //   industry: [58],
    //   image: "https://img.alicdn.com/tfscom/i4/TB1GDMhuhz1gK0jSZSgXXavwpXa",
    // },
    // {
    //   pcId: 7424,
    //   wxId: 7613,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1j87_wKH2gK0jSZFEXXcqMpXa",
    // },
    // {
    //   pcId: 7432,
    //   wxId: 7619,

    //   color: 8,
    //   industry: [53],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1FrAbwAY2gK0jSZFgXXc5OFXa",
    // },

    // {
    //   pcId: 7446,
    //   wxId: 7623,

    //   color: 8,
    //   industry: [52],
    //   image: "https://img.alicdn.com//tfscom/i4/TB1dxoxwHr1gK0jSZR0XXbP8XXa",
    // },
    // {
    //   pcId: 7450,
    //   wxId: 7648,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1dis9wFT7gK0jSZFpXXaTkpXa",
    // },
    // {
    //   pcId: 7457,
    //   wxId: 7651,

    //   color: 8,
    //   industry: [53],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1rWSKw.Y1gK0jSZFCXXcwqXXa",
    // },
    // {
    //   pcId: 7466,
    //   wxId: 7663,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1iBAhw.T1gK0jSZFrXXcNCXXa",
    // },
    // {
    //   pcId: 7468,
    //   wxId: 7509,

    //   color: 8,
    //   industry: [53],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1ekFVxQL0gK0jSZFAXXcA9pXa",
    // },
    // {
    //   pcId: 7476,
    //   wxId: 7513,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1iSaRxeL2gK0jSZPhXXahvXXa",
    // },

    // {
    //   pcId: 7484,
    //   wxId: 7665,

    //   color: 8,
    //   industry: [53],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1NuBRxGL7gK0jSZFBXXXZZpXa",
    // },
    // {
    //   pcId: 7488,
    //   wxId: 7680,

    //   color: 8,
    //   industry: [53],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1at.7xbr1gK0jSZR0XXbP8XXa",
    // },
    // {
    //   pcId: 7500,
    //   wxId: 7682,

    //   color: 8,
    //   industry: [64],
    //   image: "https://img.alicdn.com//tfscom/i1/TB18YbkxND1gK0jSZFyXXciOVXa",
    // },
    // {
    //   pcId: 7517,
    //   wxId: 7918,

    //   color: 8,
    //   industry: [51],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1pFbwx7Y2gK0jSZFgXXc5OFXa",
    // },
    // {
    //   pcId: 7528,
    //   wxId: 7928,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1OGY7x4D1gK0jSZFKXXcJrVXa",
    // },
    // {
    //   pcId: 7539,
    //   wxId: 7946,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i1/TB14cFuyhD1gK0jSZFsXXbldVXa",
    // },

    // {
    //   pcId: 7555,
    //   wxId: 7984,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1BY1xyxD1gK0jSZFyXXciOVXa",
    // },
    // {
    //   pcId: 7567,
    //   wxId: 7990,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1lDZpyrH1gK0jSZFwXXc7aXXa",
    // },
    // {
    //   pcId: 7587,
    //   wxId: 7993,

    //   color: 8,
    //   industry: [52],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1ExIbyO_1gK0jSZFqXXcpaXXa",
    // },
    // {
    //   pcId: 7597,
    //   wxId: 8008,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1kxqhy7L0gK0jSZFxXXXWHVXa",
    // },
    // {
    //   pcId: 7627,
    //   wxId: 8014,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1NxmpzrY1gK0jSZTEXXXDQVXa",
    // },
    // {
    //   pcId: 7877,
    //   wxId: 8019,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1UtcHCHr1gK0jSZFDXXb9yVXa",
    // },

    // {
    //   pcId: 7901,
    //   wxId: 8026,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1MRsPDhz1gK0jSZSgXXavwpXa",
    // },
    // {
    //   pcId: 8256,
    //   wxId: 8270,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1YYGLa9RLWu4jSZKPXXb6BpXa",
    // },
    // {
    //   pcId: 8278,
    //   wxId: 8422,

    //   color: 8,
    //   industry: [52],
    //   image: "https://img.alicdn.com//tfscom/i3/TB1LKTZIVP7gK0jSZFjXXc5aXXa",
    // },
    // {
    //   pcId: 8293,
    //   wxId: 8434,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i2/TB1iNKfJoY1gK0jSZFMXXaWcVXa",
    // },
    // {
    //   pcId: 8436,
    //   wxId: 8455,

    //   color: 8,
    //   industry: [66],
    //   image: "https://img.alicdn.com//tfscom/i1/TB1RjMuK.Y1gK0jSZFMXXaWcVXa",
    // },
  ];


  const init = () => {
    const FILTER = {
      // 1. industry 行业分类 multiple
      industry: [
        [1, "服装服饰"],
        [2, "数码家电"],
        [3, "建筑建材"],
        [4, "机械配件"],
        [5, "日用百货"],
        [6, "运动户外"],
        [7, "化妆美容"],
        [8, "箱包鞋帽"],
        [9, "汽摩汽配"],
        [10, "玩具礼品"],
        [11, "安防照明"],
        [12, "家居园艺"],
        [13, "五金工具"],
        [14, "医药日化"],
        [15, "包装印刷"],
        [16, "食品茶饮"],
        [17, "母婴用品"],
        [18, "电气设备"],
        [19, "办公文具"],
        [20, "纺织皮具"],
        [21, "宠物用品"],
        [22, "原材料"],
        [23, "能源化工"],
        [24, "农产品"],
        [25, "成人保健"],
        [26, "矿物冶金"],
      ],
      // 3. color 色系分类 single
      color: [
        [1, "#0000ff"],//蓝色
        [2, "#000000"],//黑色
        [3, ["#000000", "#ffffff"]],//黑白
        [4, "#00ff00"],//绿色
        [5, "#ff0000"],//红色
        [6, "#808080"],//灰色
        [7, "#ffa500"],//橙色
        [8, "#a67d3d"],//棕色
        [9, "#ffff00"],//黄色
        [10, "#ffc0cb"],//粉色
        [11, "#800080"],//紫色
        [12, "http://img.alicdn.com/tps/TB1dnT_PXXXXXcvaXXXXXXXXXXX-60-44.png"],//炫彩
        [13, "#00ffff"],//青色
        [14, "#ffd700"],//金色
      ],
    };

    // 参数
    const randerFilterParams = (filter) => {
      let formList = "";

      for (const key in filter) {
        if (filter.hasOwnProperty(key)) {
          const valueMap = filter[key];
          let form = "";

          if (key === "industry") {
            // multiple
            let list = valueMap.map(
              ([value, label], index) =>
                `<label class="filter filter-industry" >${label}<input type="radio" name="industry" value=${value} /></label>`
            );

            form =
              '<form class="module-form"><div class="tit">全部行业</div>' +
              `<label class="filter filter-industry all selected" >全部行业<input type="radio" name="industry" value="all" /></label>` +
              list.join("") +
              "</form>";
          } else if (key === "color") {
            let list = valueMap.map(([value, label], index) => {
              let style = "";
              if (Array.isArray(label)) {
                const linearLabel = [];
                for (let index = 0; index < label.length; index++) {
                  const colorItem = label[index];
                  linearLabel.push(
                    colorItem + " " + (index / label.length) * 100 + "%",
                    colorItem + " " + ((index + 1) / label.length) * 100 + "%"
                  );
                }
                style += `
              border: 1px solid black;
              background-image: linear-gradient(to right , ${linearLabel.join(
                  ","
                )});`;
              } else if (label.includes("http")) {
                style += `background-image: url(${label});
                      background-size: cover;
                      background-repeat: no-repeat;`;
              } else {
                style += `background-color: ${label};`;
              }
              return `<label style='${style}' class="filter filter-color" ><input type="radio" name="color" value=${value} /></label>`;
            });

            form =
              '<form class="module-form"><div class="tit" style="margin-top:30px">全部色系风格</div>' +
              '<label class="filter filter-color all selected" style="margin-bottom:0px;" >所有颜色<input type="radio" name="color" value="all" /></label>' +
              list.join("") +
              "</form>";
          }
          formList += form;
        }
      }

      return formList;
    };

    const randerModule = (list, el) => {
      const getItemDom = (itemData, index) => {
        return `<li data-industry=${itemData.industry.toString()} data-color=${itemData.color.toString()} >
              <a target="_blank" href="https://zhuangxiu.alibaba.com/detail.html?code=izx_${itemData.pcId
          }">
                <img width="224" height="350" src="${itemData.image}" />
              </a>
              <div class="number">No.${index}</div>
            </li>
            `;
      };
      const result =
        list && list.length ? list.map(getItemDom) : "<div>没有数据</div>";
      $(el).empty().append(result);
    };
    // <p>
    //   <a href="https://zxdesigner.alibaba.com/adminIndex#/template-detail?id=${itemData.pcId
    //       }" target="_blank">PC:后台链接</a>
    //   <a href="https://zxdesigner.alibaba.com/adminIndex#/promotion-create?id=${itemData.pcId
    //       }" target="_blank">设置促销</a>
    //   <a href="https://zxdesigner.alibaba.com/adminIndex#/template-detail?id=${itemData.wxId
    //       }" target="_blank">WX:后台</a>
    //   <a href="https://zxdesigner.alibaba.com/adminIndex#/promotion-create?id=${itemData.wxId
    //       }" target="_blank">促销</a>
    //   <a href="https://zhuangxiu.alibaba.com/detail.html?code=izx_${itemData.wxId
    //       }" target="_blank">前台</a>
    // </p>
    // 渲染列表
    randerModule(DATA, document.querySelector(".module-default"));

    // 渲染控制按钮
    $(".module-filter").empty().append(randerFilterParams(FILTER));

    const validate = (target, current) => {
      if (target === "all") {
        return true;
      }

      if (typeof current === "number") {
        return current === +target;
      }

      if (typeof current === "string") {
        return current
          .split(",")
          .map(Number)
          .includes(+target);
      }
    };

    // 事件绑定 点击按钮控制显影
    let filter = { industry: "all", color: "all" };
    Array.from(document.querySelectorAll(".module-form")).forEach((form) => {
      form.addEventListener("change", (e) => {
        const name = e.target.name; // string
        const value = e.target.value; // string

        $(`input[name=${name}]`)
          .removeClass("selected")
          .parent()
          .removeClass("selected");
        $(`input[name=${name}][value=${value}]`)
          .addClass("selected")
          .parent()
          .addClass("selected");
        filter[name] = value;

        // 显示指定行业
        Array.from($(`.module-default > li[data-industry][data-color]`)).forEach(
          (item) => {
            const industry = $(item).data("industry"); // number|string
            const color = $(item).data("color"); // number

            if (
              validate(filter.industry, industry) &&
              validate(filter.color, color)
            ) {
              $(item).show();
            } else {
              $(item).hide();
            }
          }
        );
      });
    });
  };

  init();

});