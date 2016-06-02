import numpy as np
import pylab as pl

data = [1,2,3,4,5,6]
pl.plot(data[:,0], data[:,1], ’ro’)
pl.xlabel(’x’)
pl.ylabel(’y’)
pl.xlim(0.0, 10.)
pl.show()