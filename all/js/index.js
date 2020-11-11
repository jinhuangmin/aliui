$(function() {
  // 模板数据
  const DATA = [
    {
      orderId: "000",
      industry: [1],
      color: 3,
      pcId: 337,
      wxId: 377,
      image: "https://img.alicdn.com//tfscom/i4/TB1mm4YouSSBuNjy0FlXXbBpVXa",
    },
    {
      orderId: "001",
      industry: [3],
      color: 3,
      pcId: 375,
      wxId: 376,
      image: "https://img.alicdn.com//tfscom/i4/TB1DqD0vrorBKNjSZFjXXc_SpXa",
    },
    {
      orderId: "002",
      industry: [1],
      color: 3,
      pcId: 458,
      wxId: 1899,
      image: "https://img.alicdn.com//tfscom/i4/TB1xYghj4tnkeRjSZSgXXXAuXXa",
    },
    {
      orderId: "003",
      industry: [10],
      color: 12,
      pcId: 556,
      wxId: 941,
      image: "https://img.alicdn.com//tfscom/i4/TB1_F1npgZC2uNjSZFnXXaxZpXa",
    },
    {
      orderId: "004",
      industry: [3],
      color: 3,
      pcId: 675,
      wxId: 1874,
      image: "https://img.alicdn.com//tfscom/i1/TB1GWNebQ9E3KVjSZFGXXc19XXa",
    },
    {
      orderId: "005",
      industry: [10],
      color: 12,
      pcId: 1173,
      wxId: 2210,
      image: "https://img.alicdn.com//tfscom/i1/TB1jT5UCwmTBuNjy1XbXXaMrVXa",
    },

    {
      orderId: "006",
      industry: [13],
      color: 2,
      pcId: 1216,
      wxId: 1352,
      image: "https://img.alicdn.com//tfscom/i3/TB15GZkvljTBKNjSZFuXXb0HFXa",
    },
    {
      orderId: "007",
      industry: [14],
      color: 1,
      pcId: 1273,
      wxId: 1908,
      image: "https://img.alicdn.com//tfscom/i4/TB1azMev_qWBKNjSZFAXXanSpXa",
    },
    {
      orderId: "008",
      industry: [5],
      color: 3,
      pcId: 1542,
      wxId: 2175,
      image: "https://img.alicdn.com//tfscom/i3/TB12e5MDACWBuNjy0FaXXXUlXXa",
    },
    {
      orderId: "009",
      industry: [6],
      color: 3,
      pcId: 1569,
      wxId: 1993,
      image: "https://img.alicdn.com//tfscom/i2/TB1CKOSrpkoBKNjSZFEXXbrEVXa",
    },
    {
      orderId: "010",
      industry: [16],
      color: 12,
      pcId: 1572,
      wxId: 1963,
      image: "https://img.alicdn.com//tfscom/i2/TB1wPMrv5AnBKNjSZFvXXaTKXXa",
    },
    {
      orderId: "011",
      industry: [3],
      color: 3,
      pcId: 1590,
      wxId: 2016,
      image: "https://img.alicdn.com//tfscom/i2/TB1pwEtv77mBKNjSZFyXXbydFXa",
    },
    {
      orderId: "012",
      industry: [8],
      color: 6,
      pcId: 1604,
      wxId: 1913,
      image: "https://img.alicdn.com//tfscom/i4/TB1sRdQEVOWBuNjy0FiXXXFxVXa",
    },
    {
      orderId: "013",
      industry: [1],
      color: 3,
      pcId: 1634,
      wxId: 2280,
      image: "https://img.alicdn.com//tfscom/i2/TB1eD4xEVGWBuNjy0FbXXb4sXXa",
    },
    {
      orderId: "014",
      industry: [1],
      color: 1,
      pcId: 1662,
      wxId: 2197,
      image: "https://img.alicdn.com//tfscom/i3/TB1YtYOFrSYBuNjSspiXXXNzpXa",
    },
    {
      orderId: "015",
      industry: [13],
      color: 9,
      pcId: 1715,
      wxId: 1928,
      image: "https://img.alicdn.com//tfscom/i4/TB1HYkdvVkoBKNjSZFEXXbrEVXa",
    },
    {
      orderId: "016",
      industry: [16],
      color: 8,
      pcId: 1718,
      wxId: 2043,
      image: "https://img.alicdn.com//tfscom/i1/TB18QAhv8smBKNjSZFsXXaXSVXa",
    },
    {
      orderId: "017",
      industry: [6],
      color: 3,
      pcId: 1790,
      wxId: 2014,
      image: "https://img.alicdn.com//tfscom/i2/TB17cBGXRWD3KVjSZKPXXap7FXa",
    },
    {
      orderId: "018",
      industry: [7],
      color: 8,
      pcId: 1925,
      wxId: 1991,
      image: "https://img.alicdn.com//tfscom/i2/TB1KPrqoYvpK1RjSZPiXXbmwXXa",
    },
    {
      orderId: "019",
      industry: [8],
      color: 6,
      pcId: 2882,
      wxId: 5865,
      image: "https://img.alicdn.com//tfscom/i2/TB1NnCQbBWD3KVjSZKPXXap7FXa",
    },
    {
      orderId: "020",
      industry: [17],
      color: 8,
      pcId: 2960,
      wxId: 3030,
      image: "https://img.alicdn.com//tfscom/i1/TB1whE.n7PoK1RjSZKbXXX1IXXa",
    },
    {
      orderId: "021",
      industry: [6],
      color: 11,
      pcId: 2988,
      wxId: 3055,
      image: "https://img.alicdn.com//tfscom/i3/TB1v_uIojDpK1RjSZFrXXa78VXa",
    },
    {
      orderId: "022",
      industry: [3],
      color: 3,
      pcId: 3094,
      wxId: 4485,
      image: "https://img.alicdn.com//tfscom/i3/TB1jBpRrmzqK1RjSZPcXXbTepXa",
    },
    {
      orderId: "023",
      industry: [5],
      color: 4,
      pcId: 3184,
      wxId: 4510,
      image: "https://img.alicdn.com//tfscom/i4/TB1vB3vnX67gK0jSZPfXXahhFXa",
    },
    {
      orderId: "024",
      industry: [4],
      color: 1,
      pcId: 4240,
      wxId: 5866,
      image: "https://img.alicdn.com//tfscom/i3/TB1jo0kM4TpK1RjSZFMXXbG_VXa",
    },
    {
      orderId: "025",
      industry: [1],
      color: 3,
      pcId: 4274,
      wxId: 5863,
      image: "https://img.alicdn.com//tfscom/i4/TB1wAFrKNTpK1RjSZFMXXbG_VXa",
    },
    {
      orderId: "026",
      industry: [1],
      color: 6,
      pcId: 4275,
      wxId: 5469,
      image: "https://img.alicdn.com//tfscom/i2/TB1NGpkMVYqK1RjSZLeXXbXppXa",
    },
    {
      orderId: "027",
      industry: [1],
      color: 10,
      pcId: 4295,
      wxId: 5864,
      image: "https://img.alicdn.com//tfscom/i1/TB1gAheM9zqK1RjSZFLXXcn2XXa",
    },
    {
      orderId: "028",
      industry: [1],
      color: 8,
      pcId: 4401,
      wxId: 5859,
      image: "https://img.alicdn.com//tfscom/i4/TB1zL7nN4TpK1RjSZR0XXbEwXXa",
    },
    {
      orderId: "029",
      industry: [21],
      color: 7,
      pcId: 4456,
      wxId: 5857,
      image: "https://img.alicdn.com//tfscom/i3/TB1YfF_O5rpK1RjSZFhXXXSdXXa",
    },
    {
      orderId: "030",
      industry: [19],
      color: 1,
      pcId: 4557,
      wxId: 5242,
      image: "https://img.alicdn.com//tfscom/i2/TB14b4abLWG3KVjSZFgXXbTspXa",
    },
    {
      orderId: "031",
      industry: [5],
      color: 8,
      pcId: 4563,
      wxId: 5683,
      image: "https://img.alicdn.com//tfscom/i3/TB1uG7_bA9E3KVjSZFGXXc19XXa",
    },
    {
      orderId: "032",
      industry: [11],
      color: 4,
      pcId: 4580,
      wxId: 5188,
      image: "https://img.alicdn.com//tfscom/i3/TB1gt7_bwmH3KVjSZKzXXb2OXXa",
    },
    {
      orderId: "033",
      industry: [3],
      color: 2,
      pcId: 4587,
      wxId: 5701,
      image: "https://img.alicdn.com//tfscom/i3/TB1yFeMbv1H3KVjSZFHXXbKppXa",
    },
    {
      orderId: "034",
      industry: [2],
      color: 1,
      pcId: 4608,
      wxId: 5251,
      image: "https://img.alicdn.com//tfscom/i2/TB1GZI.bBaE3KVjSZLeXXXsSFXa",
    },
    {
      orderId: "035",
      industry: [5],
      color: 8,
      pcId: 4620,
      wxId: 5304,
      image: "https://img.alicdn.com//tfscom/i1/TB1WBs8bwmH3KVjSZKzXXb2OXXa",
    },
    {
      orderId: "036",
      industry: [10],
      color: 7,
      pcId: 4624,
      wxId: 5699,
      image: "https://img.alicdn.com//tfscom/i2/TB1JlE.bAWE3KVjSZSyXXXocXXa",
    },
    {
      orderId: "037",
      industry: [14],
      color: 1,
      pcId: 4639,
      wxId: 5256,
      image: "https://img.alicdn.com//tfscom/i3/TB1_SU_bEGF3KVjSZFmXXbqPXXa",
    },
    {
      orderId: "038",
      industry: [8],
      color: 3,
      pcId: 4656,
      wxId: 5714,
      image: "https://img.alicdn.com//tfscom/i3/TB1GZBabRSD3KVjSZFqXXc4bpXa",
    },
    {
      orderId: "039",
      industry: [5],
      color: 7,
      pcId: 4668,
      wxId: 5511,
      image: "https://img.alicdn.com//tfscom/i4/TB1ujw_bCSD3KVjSZFKXXb10VXa",
    },
    {
      orderId: "040",
      industry: [6],
      color: 2,
      pcId: 4677,
      wxId: 5709,
      image: "https://img.alicdn.com//tfscom/i2/TB1LvQYakxz61VjSZFrXXXeLFXa",
    },
    {
      orderId: "041",
      industry: [2],
      color: 5,
      pcId: 4688,
      wxId: 5309,
      image: "https://img.alicdn.com//tfscom/i4/TB1QETdUgDqK1RjSZSyXXaxEVXa",
    },
    {
      orderId: "042",
      industry: [1],
      color: 6,
      pcId: 4694,
      wxId: 5708,
      image: "https://img.alicdn.com//tfscom/i1/TB1zgg.bv1G3KVjSZFkXXaK4XXa",
    },
    {
      orderId: "043",
      industry: [12],
      color: 4,
      pcId: 4703,
      wxId: 5718,
      image: "https://img.alicdn.com//tfscom/i1/TB1c9s_bBWD3KVjSZFsXXcqkpXa",
    },
    {
      orderId: "044",
      industry: [1],
      color: 8,
      pcId: 4723,
      wxId: 5259,
      image: "https://img.alicdn.com//tfscom/i4/TB1ap4XbRWD3KVjSZFsXXcqkpXa",
    },
    {
      orderId: "045",
      industry: [15],
      color: 13,
      pcId: 4725,
      wxId: 5474,
      image: "https://img.alicdn.com//tfscom/i3/TB1FeU9bEGF3KVjSZFoXXbmpFXa",
    },
    {
      orderId: "046",
      industry: [5],
      color: 8,
      pcId: 4746,
      wxId: 5720,
      image: "https://img.alicdn.com//tfscom/i2/TB1a4pjbHys3KVjSZFnXXXFzpXa",
    },
    {
      orderId: "047",
      industry: [20],
      color: 2,
      pcId: 4765,
      wxId: 5722,
      image: "https://img.alicdn.com//tfscom/i2/TB1ASdhbHys3KVjSZFnXXXFzpXa",
    },
    {
      orderId: "048",
      industry: [6],
      color: 7,
      pcId: 4779,
      wxId: 5727,
      image: "https://img.alicdn.com//tfscom/i4/TB1TEc9bEGF3KVjSZFoXXbmpFXa",
    },
    {
      orderId: "049",
      industry: [1],
      color: 3,
      pcId: 4790,
      wxId: 5728,
      image: "https://img.alicdn.com//tfscom/i2/TB1niNabSWD3KVjSZSgXXcCxVXa",
    },
    {
      orderId: "050",
      industry: [1],
      color: 3,
      pcId: 4792,
      wxId: 5725,
      image: "https://img.alicdn.com//tfscom/i4/TB1SaNdaQT2gK0jSZFkXXcIQFXa",
    },
    {
      orderId: "051",
      industry: [1],
      color: 7,
      pcId: 4809,
      wxId: 5730,
      image: "https://img.alicdn.com//tfscom/i4/TB11a4gbG1s3KVjSZFAXXX_ZXXa",
    },
    {
      orderId: "052",
      industry: [13],
      color: 1,
      pcId: 4821,
      wxId: 5744,
      image: "https://img.alicdn.com//tfscom/i1/TB14Pdcflv0gK0jSZKbXXbK2FXa",
    },
    {
      orderId: "053",
      industry: [10],
      color: 7,
      pcId: 4822,
      wxId: 5739,
      image: "https://img.alicdn.com//tfscom/i4/TB1KsyNbECF3KVjSZJnXXbnHFXa",
    },
    {
      orderId: "054",
      industry: [7],
      color: 2,
      pcId: 4834,
      wxId: 5308,
      image: "https://img.alicdn.com//tfscom/i3/TB1xqA.aAH0gK0jSZPiXXavapXa",
    },
    {
      orderId: "055",
      industry: [13],
      color: 7,
      pcId: 4839,
      wxId: 5247,
      image: "https://img.alicdn.com//tfscom/i1/TB1.HhAX81D3KVjSZFyXXbuFpXa",
    },
    {
      orderId: "056",
      industry: [8],
      color: 13,
      pcId: 4853,
      wxId: 5754,
      image: "https://img.alicdn.com//tfscom/i4/TB1Wci7bBWD3KVjSZKPXXap7FXa",
    },
    {
      orderId: "057",
      industry: [1],
      color: 3,
      pcId: 4855,
      wxId: 5749,
      image: "https://img.alicdn.com//tfscom/i2/TB1ylktXYys3KVjSZFnXXXFzpXa",
    },
    {
      orderId: "058",
      industry: [5],
      color: 8,
      pcId: 4886,
      wxId: 5747,
      image: "https://img.alicdn.com//tfscom/i1/TB1gna3bv1H3KVjSZFHXXbKppXa",
    },
    {
      orderId: "059",
      industry: [12],
      color: 4,
      pcId: 4887,
      wxId: 5777,
      image: "https://img.alicdn.com//tfscom/i2/TB1l3m.bBCw3KVjSZFlXXcJkFXa",
    },
    {
      orderId: "060",
      industry: [11],
      color: 7,
      pcId: 4914,
      wxId: 5778,
      image: "https://img.alicdn.com//tfscom/i2/TB1A8uRakxz61VjSZFtXXaDSVXa",
    },
    {
      orderId: "061",
      industry: [1],
      color: 10,
      pcId: 4915,
      wxId: 5756,
      image: "https://img.alicdn.com//tfscom/i1/TB1IKyNbv1H3KVjSZFHXXbKppXa",
    },
    {
      orderId: "062",
      industry: [17],
      color: 10,
      pcId: 4935,
      wxId: 5781,
      image: "https://img.alicdn.com//tfscom/i4/TB1V.FXbUGF3KVjSZFoXXbmpFXa",
    },
    {
      orderId: "063",
      industry: [1],
      color: 13,
      pcId: 4940,
      wxId: 5782,
      image: "https://img.alicdn.com//tfscom/i3/TB1mo9Aakxz61VjSZFtXXaDSVXa",
    },
    {
      orderId: "064",
      industry: [10],
      color: 2,
      pcId: 4970,
      wxId: 5785,
      image: "https://img.alicdn.com//tfscom/i2/TB1pQHmbL5G3KVjSZPxXXbI3XXa",
    },
    {
      orderId: "065",
      industry: [2],
      color: 3,
      pcId: 4986,
      wxId: 5507,
      image: "https://img.alicdn.com//tfscom/i1/TB17LbsbG5s3KVjSZFNXXcD3FXa",
    },
    {
      orderId: "066",
      industry: [22],
      color: 1,
      pcId: 5050,
      wxId: 5791,
      image: "https://img.alicdn.com//tfscom/i4/TB1EseucG1s3KVjSZFAXXX_ZXXa",
    },
    {
      orderId: "067",
      industry: [11],
      color: 12,
      pcId: 5099,
      wxId: 5185,
      image: "https://img.alicdn.com//tfscom/i4/TB18mCXdxiH3KVjSZPfXXXBiVXa",
    },
    {
      orderId: "068",
      industry: [9],
      color: 5,
      pcId: 5171,
      wxId: 5786,
      image: "https://img.alicdn.com//tfscom/i1/TB1Grtfev1G3KVjSZFkXXaK4XXa",
    },
    {
      orderId: "069",
      industry: [2],
      color: 4,
      pcId: 5200,
      wxId: 5794,
      image: "https://img.alicdn.com//tfscom/i2/TB1YiueeYus3KVjSZKbXXXqkFXa",
    },
    {
      orderId: "070",
      industry: [5],
      color: 1,
      pcId: 5210,
      wxId: 5518,
      image: "https://img.alicdn.com//tfscom/i4/TB10l_VeWSs3KVjSZPiXXcsiVXa",
    },
    {
      orderId: "071",
      industry: [8],
      color: 3,
      pcId: 5276,
      wxId: 5811,
      image: "https://img.alicdn.com//tfscom/i4/TB1chJ3bfb2gK0jSZK9XXaEgFXa",
    },
    {
      orderId: "072",
      industry: [6],
      color: 1,
      pcId: 5316,
      wxId: 5812,
      image: "https://img.alicdn.com//tfscom/i2/TB1pbQYalr0gK0jSZFnXXbRRXXa",
    },
    {
      orderId: "073",
      industry: [13],
      color: 1,
      pcId: 5349,
      wxId: 5813,
      image: "https://img.alicdn.com//tfscom/i1/TB13i0gaUT1gK0jSZFhXXaAtVXa",
    },
    {
      orderId: "074",
      industry: [19],
      color: 5,
      pcId: 5391,
      wxId: 5814,
      image: "https://img.alicdn.com//tfscom/i4/TB1cSEba7H0gK0jSZPiXXavapXa",
    },
    {
      orderId: "075",
      industry: [23],
      color: 12,
      pcId: 5405,
      wxId: 5821,
      image: "https://img.alicdn.com//tfscom/i1/TB1BH86bbj1gK0jSZFOXXc7GpXa",
    },
    {
      orderId: "076",
      industry: [2],
      color: 8,
      pcId: 5409,
      wxId: 5823,
      image: "https://img.alicdn.com//tfscom/i1/TB1GvqzbkT2gK0jSZFkXXcIQFXa",
    },
    {
      orderId: "077",
      industry: [11],
      color: 5,
      pcId: 5426,
      wxId: 5830,
      image: "https://img.alicdn.com//tfscom/i1/TB1ezscbkH0gK0jSZPiXXavapXa",
    },
    {
      orderId: "078",
      industry: [26],
      color: 7,
      pcId: 5437,
      wxId: 5828,
      image: "https://img.alicdn.com//tfscom/i2/TB1TMtAbBr0gK0jSZFnXXbRRXXa",
    },
    {
      orderId: "079",
      industry: [6],
      color: 1,
      pcId: 5445,
      wxId: 5837,
      image: "https://img.alicdn.com//tfscom/i2/TB19vV8buH2gK0jSZJnXXaT1FXa",
    },
    {
      orderId: "080",
      industry: [11],
      color: 1,
      pcId: 5465,
      wxId: 5838,
      image: "https://img.alicdn.com//tfscom/i2/TB1zku3bNv1gK0jSZFFXXb0sXXa",
    },
    {
      orderId: "081",
      industry: [10],
      color: 5,
      pcId: 5501,
      wxId: 5841,
      image: "https://img.alicdn.com//tfscom/i2/TB1vhqcb2b2gK0jSZK9XXaEgFXa",
    },
    {
      orderId: "082",
      industry: [3],
      color: 8,
      pcId: 5503,
      wxId: 5840,
      image: "https://img.alicdn.com//tfscom/i4/TB1f9H1e4D1gK0jSZFyXXciOVXa",
    },
    {
      orderId: "083",
      industry: [10],
      color: 10,
      pcId: 5536,
      wxId: 5855,
      image: "https://img.alicdn.com//tfscom/i4/TB1O3Xjci_1gK0jSZFqXXcpaXXa",
    },
    {
      orderId: "084",
      industry: [2],
      color: 3,
      pcId: 5571,
      wxId: 5843,
      image: "https://img.alicdn.com//tfscom/i3/TB1V.eWcEY1gK0jSZFMXXaWcVXa",
    },
    {
      orderId: "085",
      industry: [15],
      color: 8,
      pcId: 5573,
      wxId: 5844,
      image: "https://img.alicdn.com//tfscom/i2/TB1wv58crr1gK0jSZR0XXbP8XXa",
    },
    {
      orderId: "086",
      industry: [18],
      color: 6,
      pcId: 5607,
      wxId: 5849,
      image: "https://img.alicdn.com//tfscom/i4/TB1Sh49cQT2gK0jSZPcXXcKkpXa",
    },
    {
      orderId: "087",
      industry: [13],
      color: 3,
      pcId: 5617,
      wxId: 5848,
      image: "https://img.alicdn.com//tfscom/i2/TB1JZigcO_1gK0jSZFqXXcpaXXa",
    },
    {
      orderId: "088",
      industry: [11],
      color: 6,
      pcId: 5987,
      wxId: 5860,
      image: "https://img.alicdn.com//tfscom/i2/TB18S3Te7L0gK0jSZFAXXcA9pXa",
    },
    {
      orderId: "089",
      industry: [2],
      color: 11,
      pcId: 6731,
      wxId: 6754,
      image: "https://img.alicdn.com//tfscom/i3/TB1W.O9qYY1gK0jSZTEXXXDQVXa",
    },
    {
      orderId: "090",
      industry: [1],
      color: 5,
      pcId: 6757,
      wxId: 6831,
      image: "https://img.alicdn.com//tfscom/i3/TB1j5Iqq7L0gK0jSZFxXXXWHVXa",
    },
    {
      orderId: "091",
      industry: [1],
      color: 3,
      pcId: 6836,
      wxId: 6853,
      image: "https://img.alicdn.com//tfscom/i3/TB1T1sWq1H2gK0jSZFEXXcqMpXa",
    },
    {
      orderId: "092",
      industry: [1],
      color: 2,
      pcId: 6850,
      wxId: 6863,
      image: "https://img.alicdn.com//tfscom/i2/TB1uwXXrHj1gK0jSZFOXXc7GpXa",
    },
    {
      orderId: "093",
      industry: [25],
      color: 2,
      pcId: 6870,
      wxId: 6878,
      image: "https://img.alicdn.com//tfscom/i2/TB1NRxWrUT1gK0jSZFhXXaAtVXa",
    },
    {
      orderId: "094",
      industry: [1],
      color: 10,
      pcId: 6877,
      wxId: 6897,
      image: "https://img.alicdn.com//tfscom/i3/TB1IKM8rAL0gK0jSZFAXXcA9pXa",
    },
    {
      orderId: "095",
      industry: [7],
      color: 7,
      pcId: 6891,
      wxId: 6903,
      image: "https://img.alicdn.com//tfscom/i1/TB1afmDrrj1gK0jSZFOXXc7GpXa",
    },
    {
      orderId: "096",
      industry: [1],
      color: 7,
      pcId: 6912,
      wxId: 6936,
      image: "https://img.alicdn.com//tfscom/i2/TB1ABbQsAP2gK0jSZPxXXacQpXa",
    },
    {
      orderId: "097",
      industry: [1],
      color: 3,
      pcId: 6922,
      wxId: 6956,
      image: "https://img.alicdn.com//tfscom/i4/TB1Xx4AtV67gK0jSZPfXXahhFXa",
    },
    {
      orderId: "098",
      industry: [5],
      color: 12,
      pcId: 6954,
      wxId: 6972,
      image: "https://img.alicdn.com/tfscom/i2/TB1eWQUtYr1gK0jSZFDXXb9yVXa",
    },
    {
      orderId: "099",
      industry: [1],
      color: 3,
      pcId: 6957,
      wxId: 6977,
      image: "https://img.alicdn.com/tfscom/i4/TB1Tx6FtF67gK0jSZPfXXahhFXa",
    },
    {
      orderId: "100",
      industry: [1],
      color: 3,
      pcId: 6978,
      wxId: 7034,
      image: "https://img.alicdn.com/tfscom/i3/TB1VGrot1L2gK0jSZFmXXc7iXXa",
    },
    {
      orderId: "101",
      industry: [8],
      color: 8,
      pcId: 7021,
      wxId: 7043,
      image: "https://img.alicdn.com/tfscom/i4/TB1yFg1t4z1gK0jSZSgXXavwpXa",
    },
    {
      orderId: "102",
      industry: [8],
      color: 8,
      pcId: 7059,
      wxId: 7077,
      image: "https://img.alicdn.com/tfscom/i1/TB1hOZztYH1gK0jSZFwXXc7aXXa",
    },
    {
      orderId: "103",
      industry: [1],
      color: 12,
      pcId: 7060,
      wxId: 7095,
      image: "https://img.alicdn.com/tfscom/i4/TB1h1IgtET1gK0jSZFhXXaAtVXa",
    },
    {
      orderId: "104",
      industry: [2],
      color: 11,
      pcId: 7096,
      wxId: 7107,
      image: "https://img.alicdn.com/tfscom/i1/TB1kUVguxD1gK0jSZFsXXbldVXa",
    },
    {
      orderId: "105",
      industry: [2],
      color: 5,
      pcId: 7224,
      wxId: 7232,
      image: "https://img.alicdn.com/tfscom/i4/TB1GDMhuhz1gK0jSZSgXXavwpXa",
    },
    {
      orderId: "106",
      industry: [15],
      color: 4,
      pcId: 7424,
      wxId: 7613,
      image: "https://img.alicdn.com//tfscom/i3/TB1j87_wKH2gK0jSZFEXXcqMpXa",
    },
    {
      orderId: "107",
      industry: [18],
      color: 1,
      pcId: 7432,
      wxId: 7619,
      image: "https://img.alicdn.com//tfscom/i3/TB1FrAbwAY2gK0jSZFgXXc5OFXa",
    },
    {
      orderId: "108",
      industry: [20],
      color: 8,
      pcId: 7446,
      wxId: 7623,
      image: "https://img.alicdn.com//tfscom/i4/TB1dxoxwHr1gK0jSZR0XXbP8XXa",
    },
    {
      orderId: "109",
      industry: [13],
      color: 1,
      pcId: 7450,
      wxId: 7648,
      image: "https://img.alicdn.com//tfscom/i1/TB1dis9wFT7gK0jSZFpXXaTkpXa",
    },
    {
      orderId: "110",
      industry: [4],
      color: 1,
      pcId: 7457,
      wxId: 7651,
      image: "https://img.alicdn.com//tfscom/i1/TB1rWSKw.Y1gK0jSZFCXXcwqXXa",
    },
    {
      orderId: "111",
      industry: [23],
      color: 1,
      pcId: 7466,
      wxId: 7663,
      image: "https://img.alicdn.com//tfscom/i3/TB1iBAhw.T1gK0jSZFrXXcNCXXa",
    },
    {
      orderId: "112",
      industry: [9],
      color: 7,
      pcId: 7468,
      wxId: 7509,
      image: "https://img.alicdn.com//tfscom/i1/TB1ekFVxQL0gK0jSZFAXXcA9pXa",
    },
    {
      orderId: "113",
      industry: [14],
      color: 1,
      pcId: 7476,
      wxId: 7513,
      image: "https://img.alicdn.com//tfscom/i1/TB1iSaRxeL2gK0jSZPhXXahvXXa",
    },
    {
      orderId: "114",
      industry: [4],
      color: 5,
      pcId: 7484,
      wxId: 7665,
      image: "https://img.alicdn.com//tfscom/i3/TB1NuBRxGL7gK0jSZFBXXXZZpXa",
    },
    {
      orderId: "115",
      industry: [18],
      color: 1,
      pcId: 7488,
      wxId: 7680,
      image: "https://img.alicdn.com//tfscom/i2/TB1at.7xbr1gK0jSZR0XXbP8XXa",
    },
    {
      orderId: "116",
      industry: [7],
      color: 4,
      pcId: 7500,
      wxId: 7682,
      image: "https://img.alicdn.com//tfscom/i1/TB18YbkxND1gK0jSZFyXXciOVXa",
    },
    {
      orderId: "117",
      industry: [9],
      color: 9,
      pcId: 7517,
      wxId: 7918,
      image: "https://img.alicdn.com//tfscom/i1/TB1pFbwx7Y2gK0jSZFgXXc5OFXa",
    },
    {
      orderId: "118",
      industry: [5],
      color: 4,
      pcId: 7528,
      wxId: 7928,
      image: "https://img.alicdn.com//tfscom/i1/TB1OGY7x4D1gK0jSZFKXXcJrVXa",
    },
    {
      orderId: "119",
      industry: [15],
      color: 7,
      pcId: 7539,
      wxId: 7946,
      image: "https://img.alicdn.com//tfscom/i1/TB14cFuyhD1gK0jSZFsXXbldVXa",
    },
    {
      orderId: "120",
      industry: [15],
      color: 13,
      pcId: 7555,
      wxId: 7984,
      image: "https://img.alicdn.com//tfscom/i3/TB1BY1xyxD1gK0jSZFyXXciOVXa",
    },
    {
      orderId: "121",
      industry: [15],
      color: 4,
      pcId: 7567,
      wxId: 7990,
      image: "https://img.alicdn.com//tfscom/i1/TB1lDZpyrH1gK0jSZFwXXc7aXXa",
    },
    {
      orderId: "122",
      industry: [22],
      color: 9,
      pcId: 7587,
      wxId: 7993,
      image: "https://img.alicdn.com//tfscom/i3/TB1ExIbyO_1gK0jSZFqXXcpaXXa",
    },
    {
      orderId: "123",
      industry: [18],
      color: 1,
      pcId: 7597,
      wxId: 8008,
      image: "https://img.alicdn.com//tfscom/i3/TB1kxqhy7L0gK0jSZFxXXXWHVXa",
    },
    {
      orderId: "124",
      industry: [15],
      color: 8,
      pcId: 7627,
      wxId: 8014,
      image: "https://img.alicdn.com//tfscom/i3/TB1NxmpzrY1gK0jSZTEXXXDQVXa",
    },
    {
      orderId: "125",
      industry: [14],
      color: 1,
      pcId: 7877,
      wxId: 8019,
      image: "https://img.alicdn.com//tfscom/i1/TB1UtcHCHr1gK0jSZFDXXb9yVXa",
    },
    {
      orderId: "126",
      industry: [20],
      color: 8,
      pcId: 7901,
      wxId: 8026,
      image: "https://img.alicdn.com//tfscom/i3/TB1MRsPDhz1gK0jSZSgXXavwpXa",
    },
    {
      orderId: "127",
      industry: [20],
      color: 11,
      pcId: 8256,
      wxId: 8270,
      image: "https://img.alicdn.com//tfscom/i3/TB1YYGLa9RLWu4jSZKPXXb6BpXa",
    },
    {
      orderId: "128",
      industry: [3],
      color: 8,
      pcId: 8278,
      wxId: 8422,
      image: "https://img.alicdn.com//tfscom/i3/TB1LKTZIVP7gK0jSZFjXXc5aXXa",
    },
    {
      orderId: "129",
      industry: [2],
      color: 13,
      pcId: 8293,
      wxId: 8434,
      image: "https://img.alicdn.com//tfscom/i2/TB1iNKfJoY1gK0jSZFMXXaWcVXa",
    },
    {
      orderId: "130",
      industry: [13],
      color: 1,
      pcId: 8436,
      wxId: 8455,
      image: "https://img.alicdn.com//tfscom/i1/TB1RjMuK.Y1gK0jSZFMXXaWcVXa",
    },
    {
      orderId: "131",
      industry: [15],
      color: 4,
      image: "https://img.alicdn.com//tfscom/i4/TB1t_gOM1H2gK0jSZJnXXaT1FXa",
      pcId: 8572,
      wxId: 8676
    },
    {
      orderId: "132",
      industry: [1],
      color: 3,
      image: "https://img.alicdn.com//tfscom/i3/TB1Cp8AczMZ7e4jSZFOXXX7epXa",
      pcId: 8685,
      wxId: 8740
    },
    {
      orderId: "133",
      industry: [3],
      color: 8,
      image: "https://img.alicdn.com//tfscom/i4/TB1.d88SFP7gK0jSZFjXXc5aXXa",
      pcId: 8998,
      wxId: 9396
    },
    {
      orderId: "134",
      industry: [13],
      color: 7,
      image: "https://img.alicdn.com//tfscom/i3/TB1m.b3TEY1gK0jSZFCXXcwqXXa",
      pcId: 9053,
      wxId: ''
    },
    {
      orderId: "135",
      industry: [5],
      color: 4,
      image: "https://img.alicdn.com//tfscom/i2/TB13sWXTFT7gK0jSZFpXXaTkpXa",
      pcId: 9067,
      wxId: 9463
    },
    {
      orderId: "136",
      industry: [17],
      color: 1,
      image: "https://img.alicdn.com//tfscom/i1/TB1fs0Yhkcx_u4jSZFlXXXnUFXa",
      pcId: 9093,
      wxId: ''
    },
    {
      orderId: "137",
      industry: [15],
      color: 4,
      image: "https://img.alicdn.com//tfscom/i1/TB1jwAvUWL7gK0jSZFBXXXZZpXa",
      pcId: 9153,
      wxId: ''
    }
  ];


  const init = () => {

    const getIdBySearchParams = (initValue = "all", name = "industryId") => {
      try {
        const id = new URL(window.location.href).searchParams.get(name);
        if (id === null || isNaN(+id)) {
          return initValue;
        }
        return +id;
      } catch (error) {
        return initValue;
      }
    };

    let filter = { industry: getIdBySearchParams("all"), color: getIdBySearchParams("all", "colorId") };
    const FILTER = {
      // 1. industry 行业分类 multiple
      industry: [
        ["all", "全部行业"],
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
        // [24, "农产品"],
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
        // [14, "#ffd700"],//金色
      ],
    };

    // 参数
    const randerFilterParams = (_filter) => {
      let formList = "";

      for (const key in _filter) {
        if (_filter.hasOwnProperty(key)) {
          const valueMap = _filter[key];
          let form = "";

          if (key === "industry") {
            // multiple
            let list = valueMap.map(
              ([value, label], index) =>
                `<label class="filter filter-industry ${(value === filter.industry ? "selected" : "")}" >${label}<input type="radio" name="industry" value=${value} /></label>`
            );

            form =
              '<form class="module-form"><div class="tit">按行业选择</div>' +
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
              return `<label style='${style}' class="filter filter-color ${(value === filter.color ? "selected" : "")}" ><input type="radio" name="color" value=${value} /></label>`;
            });
            form =
              '<form class="module-form"><div class="tit" style="margin-top:30px">按颜色选择</div>' +
              `<label class="filter filter-color all ${("all" === filter.color ? "selected" : "")}" style="margin-bottom:0px;" >所有颜色<input type="radio" name="color" value="all" /></label>` +
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
        var randomNum = Math.floor(Math.random() * 899 + 100);
        return `<li data-industry=${itemData.industry.toString()} data-color=${itemData.color.toString()} style="display: ${(itemData.industry.includes(filter.industry) || filter.industry == "all") && (itemData.color == filter.color || filter.color == "all")
          ? "list-item"
          : "none"
          };">
              <a target="_blank" href="https://zhuangxiu.alibaba.com/detail.html?code=izx_${itemData.pcId
          }">
                <img width="224" height="350" src="${itemData.image}" />
              </a>
              <div class="number">${randomNum}${itemData.orderId}</div>
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
    Array.from(document.querySelectorAll(".module-form")).forEach((form) => {
      form.addEventListener("click", (e) => {
        const name = e.target.name; // string
        const value = e.target.value; // string

        $(`input[name=${name}]`).removeClass("selected").parent().removeClass("selected");
        $(`input[name=${name}][value=${value}]`).addClass("selected").parent().addClass("selected");

        if (name == "industry") {
          filter = { industry: value, color: "all" }
          window.history.pushState({}, "", `./index.html?industryId=${value}&colorId=all`);
          $(`input[name=color]`).removeClass("selected").parent().removeClass("selected");
          $(`input[name=color][value=all]`).addClass("selected").parent().addClass("selected");
        } else {
          filter = { industry: "all", color: value }
          window.history.pushState({}, "", `./index.html?industryId=all&colorId=${value}`);
          $(`input[name=industry]`).removeClass("selected").parent().removeClass("selected");
          $(`input[name=industry][value=all]`).addClass("selected").parent().addClass("selected");
        }

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