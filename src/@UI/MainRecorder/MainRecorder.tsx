import React, { FC, memo, useEffect, useRef, useState } from "react";
import {
  Box,
  Icon,
  Theme,
  Button,
  useTheme,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";
import { FaVideoSlash, FaDownload, FaUser, FaPlay } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";
import "video-react/dist/video-react.css";
// @ts-ignore
import { Player } from "video-react";
// @ts-ignore
import RecordRTC, {
  // @ts-ignore
  RecordRTCPromisesHandler,
} from "recordrtc";
import { saveAs } from "file-saver";

const MainRecorder: FC = () => {
  const theme: Theme = useTheme();
  const [recorder, setRecorder] = useState<RecordRTC | null>();
  const [stream, setStream] = useState<MediaStream | null>();
  const [videoBlob, setVideoUrlBlob] = useState<Blob | null>();
  const [type, setType] = useState<"video" | "screen">("screen");
  const [showText, setShowText] = useState<boolean>(true);

  const liveVideoRef = useRef<HTMLVideoElement | null>(null); // Ref for the live video element

  useEffect(() => {
    if (stream && liveVideoRef.current) {
      liveVideoRef.current.srcObject = stream; // Set the stream as the source for the live video element
    }
  }, [stream]);

  const startRecording = async () => {
    const mediaDevices = navigator.mediaDevices;
    const stream: MediaStream =
      type === "video"
        ? await mediaDevices.getUserMedia({
          video: true,
          audio: true,
        })
        : await (mediaDevices as any).getDisplayMedia({
          video: true,
          audio: false,
        });
    const recorder: RecordRTC = new RecordRTCPromisesHandler(stream, {
      type: "video",
    });

    await recorder.startRecording();
    setRecorder(recorder);
    setStream(stream);
    setVideoUrlBlob(null);
    setShowText(false)
    if (liveVideoRef.current) {
      liveVideoRef.current.srcObject = stream;
    }

  };

  const stopRecording = async () => {
    if (recorder) {
      await recorder.stopRecording();
      const blob: Blob = await recorder.getBlob();
      (stream as any).stop();
      setVideoUrlBlob(blob);
      setStream(null);
      setRecorder(null);
    }
  };

  const downloadVideo = () => {
    if (videoBlob) {
      const mp4File = new File([videoBlob], "demo.mp4", { type: "video/mp4" });
      saveAs(mp4File, `Video-${Date.now()}.mp4`);
      // saveAs(videoBlob, `Video-${Date.now()}.webm`)
    }
  };

  const changeType = () => {
    if (type === "screen") {
      setType("video");
    } else {
      setType("screen");
    }
  };

  return (
    <SimpleGrid spacing="5" p="5">
      <Box
        display="flex"
        justifyContent="center"
        flexDirection={[
          "column", // 0-30em
          "row", // 30em-48em
          "row", // 48em-62em
          "row", // 62em+
        ]}
      >
        <Button
          m="1"
          bg={theme.colors.gray[600]}
          size="lg"
          aria-label="start recording"
          color="white"
          onClick={changeType}
        >
          {type === "screen" ? "Recording Screen  " : "Recording Video"}
          {type === "screen" ? <CgScreen style={{ marginLeft: "5px", fontSize: "140%" }} /> : <FaUser style={{ marginLeft: "5px" }} />}

        </Button>
        <IconButton
          display={stream ? "none" : "block"}
          m="1"
          bg={theme.colors.gray[600]}
          size="lg"
          aria-label="start recording"
          color="white"
          onClick={startRecording}
          icon={<Icon as={FaPlay} />}
        />
        <IconButton
          display={stream ? "block" : "none"}
          m="1"
          bg={theme.colors.red[600]}
          _hover={{ bg: theme.colors.red[700] }} // Darker shade on hover
          size="lg"
          color="white"
          aria-label="stop recording"
          onClick={stopRecording}
          disabled={recorder ? false : true}
          icon={<Icon as={FaVideoSlash} />}
        />
        <IconButton
          bg={theme.colors.gray[600]}
          m="1"
          size="lg"
          disabled={!!!videoBlob}
          color="white"
          onClick={downloadVideo}
          aria-label="download video"
          icon={<Icon as={FaDownload} />}
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Box
          bg="inherit"
          h="auto"
          width={[
            "100%", // 0-30em
            "100%", // 30em-48em
            "60vw", // 48em-62em
            "60vw", // 62em+
          ]}
          position="relative" // Added to position the text in the center
        >
          {!!videoBlob && (
            <Player
              src={window.URL.createObjectURL(videoBlob)}
              style={{ width: "100%", height: "100%" }}
            />
          )}
          {liveVideoRef && !videoBlob && (
            <video
              ref={liveVideoRef}
              autoPlay
              muted
              style={{ width: "100%", height: "100%" }}
            />
          )}
          {showText && (
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              color="white"
              fontSize="xl"
            >
              Start the recording
            </Box>
          )}
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default memo(MainRecorder);