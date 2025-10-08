#PY  <- Needed to identify #
#--automatically built--

adm = Avidemux()
adm.clearVideoFilters()
adm.addVideoFilter("addLogo", "x=0", "y=0", "alpha=255", "logoImageFile=/Applications/Avidemux_2.8.1.app/Contents/MacOS/ADM_plugins6/autoScripts/GT4_01_Overlay.png", "fade=0", "scale=1.000000")
adm.addVideoFilter("crop", "top=304", "bottom=280", "left=0", "right=0", "ar_select=0")
adm.addVideoFilter("swscale", "width=720", "height=328", "algo=1", "sourceAR=0", "targetAR=0", "lockAR=True", "roundup=0")
adm.addVideoFilter("resampleFps", "mode=3", "newFpsDen=1001", "newFpsNum=30000", "interpolation=0")