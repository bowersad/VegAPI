using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VegAPI.Entities
{
    public class Vegetable
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public VegetableType Type { get; set; }
        public List<int> GrowthMonths { get; set; }
    }
}
