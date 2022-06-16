/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Typed from 'react-typed';
import MangaA from '../../assets/mangaA.png';

const IntroText = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={0} marginTop={5} minHeight={120}>
        <Box marginBottom={5}>
          <Typography
            variant="h6"
            color="text.primary"
            align={'left'}
            gutterBottom
            sx={{
              fontWeight: 400,
            }}
          >
            <Typography
              color={'primary'}
              component={'span'}
              variant={'h4'}

            >
              <Typed
                strings={
                  [
                    'It\'s all come down to this.', 
                    'What have I gotten myself into?', 
                    'No turning back now.',
                  ]
                }
                typeSpeed={30}
                loop={false}
              />
            </Typography>
          </Typography>
        </Box>
      </Box>
      {/* <Box marginBottom={20} marginTop={10}>
        <Card variant="outlined">
          <CardMedia
            component="img"
            height="1500"
            image={ MangaA }
            alt="Just the start"
          />            
        </Card>          
      </Box>       */}
      {/* <Box
        component={SyntaxHighlighter}
        language={'javascript'}
        style={vs2015}
        padding={`${theme.spacing(2)} !important`}
        borderRadius={2}
        margin={`${theme.spacing(0)} !important`}
        bgcolor={'#21325b !important'}
      >
        {`
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAsync = exports.parseSync = exports.parse = void 0;

function _gensync() {
  const data = require("gensync");

  _gensync = function () {
    return data;
  };

  return data;
}

var _config = require("./config");

var _parser = require("./parser");

var _normalizeOpts = require("./transformation/normalize-opts");

const parseRunner = _gensync()(function* parse(code, opts) {
  const config = yield* (0, _config.default)(opts);

  if (config === null) {
    return null;
  }

  return yield* (0, _parser.default)(config.passes, (0, _normalizeOpts.default)(config), code);
});

const parse = function parse(code, opts, callback) {
  if (typeof opts === "function") {
    callback = opts;
    opts = undefined;
  }

  if (callback === undefined) return parseRunner.sync(code, opts);
  parseRunner.errback(code, opts, callback);
};

exports.parse = parse;
const parseSync = parseRunner.sync;
exports.parseSync = parseSync;
const parseAsync = parseRunner.async;
exports.parseAsync = parseAsync;
        `}
      
      </Box> */}
    </Box>
  );
};

export default IntroText;
