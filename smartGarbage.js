let bins = {
  waste: 0,
  recycling: 0,
  compost: 0
};


function smartGarbage(trash,bins){
  switch(trash){
    case 'waste':
      bins.waste++;
      break;
    case 'recycling':
      bins.recycling++;
      break;
    case 'compost':
      bins.compost++;
      break;
  }
  return bins;
}


