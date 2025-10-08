#PY  <- Needed to identify #
#--automatically built--

adm = Avidemux()
adm.clearVideoFilters()
adm.addVideoFilter("addLogo", "x=0", "y=0", "alpha=255", "logoImageFile=C:/Users/m.bey/AppData/Local/MB Video-Editor/sources/programs/editor/Avidemux/App/Avidemux64/plugins/autoScripts/GT4_01_Overlay.png", "fade=0")
adm.addVideoFilter("crop", "top=304", "bottom=280", "left=0", "right=0", "rubber_is_hidden=False", "ar_select=0")
adm.addVideoFilter("swscale", "width=720", "height=328", "algo=1", "sourceAR=0", "targetAR=0", "lockAR=True", "roundup=0")
adm.addVideoFilter("resampleFps", "mode=3", "newFpsDen=1001", "newFpsNum=30000")