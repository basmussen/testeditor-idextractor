package com.benasmussen.tools.testeditor;

import java.io.File;
import java.util.Vector;

import org.apache.commons.cli.CommandLine;
import org.apache.commons.cli.CommandLineParser;
import org.apache.commons.cli.GnuParser;
import org.apache.commons.cli.HelpFormatter;
import org.apache.commons.cli.Options;
import org.apache.commons.cli.ParseException;

/*
 * #%L
 * IdExtractor
 * %%
 * Copyright (C) 2014 Ben Asmussen <opensource@ben-asmussen.com>
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
/**
 * IdExtractor
 * 
 * @author Ben Asmussen
 *
 */
public class ExtractorCLI
{
    public static final String CMD_OPT_INPUT = "input";

    // public static final String CMD_OPT_OUTPUT = "output";

    public static void main(String[] args) throws Exception
    {
        HelpFormatter formatter = new HelpFormatter();

        // cli options
        Options options = new Options();
        options.addOption(CMD_OPT_INPUT, true, "Input file");
        // options.addOption(CMD_OPT_OUTPUT, true, "Output file");

        try
        {

            // evaluate command line options
            CommandLineParser parser = new GnuParser();
            CommandLine cmd = parser.parse(options, args);

            if (cmd.hasOption(CMD_OPT_INPUT))
            {
                // option value
                String optionValue = cmd.getOptionValue(CMD_OPT_INPUT);

                // input file
                File inputFile = new File(optionValue);

                // id extractor
                IdExtractor idExtractor = new IdExtractor(inputFile);
                Vector<Vector> data = idExtractor.parse();

                // // TODO implement output folder
                // if (cmd.hasOption(CMD_OPT_OUTPUT))
                // {
                // // file output
                // throw new Exception("Not implemented");
                // }
                // else
                // {
                // console output
                System.out.println("Id;Value");
                for (Vector vector : data)
                {
                    StringBuilder sb = new StringBuilder();
                    if (vector.size() >= 1)
                    {
                        sb.append(vector.get(0));
                    }
                    sb.append(";");
                    if (vector.size() >= 2)
                    {
                        sb.append(vector.get(1));
                    }
                    System.out.println(sb.toString());
                }
                // }
            }
            else
            {
                throw new IllegalArgumentException();
            }

        }
        catch (ParseException e)
        {
            formatter.printHelp("ExtractorCLI", options);
        }
        catch (IllegalArgumentException e)
        {
            formatter.printHelp("ExtractorCLI", options);
        }
    }
}
