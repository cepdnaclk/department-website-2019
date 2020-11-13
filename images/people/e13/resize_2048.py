import os,sys,time

import subprocess
from PIL import Image

height = 150
width = 150
#size = input('Enter resize factor as a percentage of 100%')
factor = 0.2
relevant_path = '.'
included_extenstions = ['jpg','bmp','png','gif','jpeg','JPG' ] 
file_names = [fn for fn in os.listdir(relevant_path) if any([fn.endswith(ext) for ext in included_extenstions])]
print file_names
count=0
total=len(file_names)
for name in file_names:
    imageFile = name
    im1 = Image.open(imageFile)
    #size = (2048*100)/(im1.size[0]*1.0)
    #print size
    im5 = im1.resize((int(im1.size[0]*factor), int(im1.size[1]*factor)), Image.ANTIALIAS)    # best down-sizing filter
    
    im5.save(str("new\\"+name).lower())
    count+=1
    print name," ",count,"/",total
