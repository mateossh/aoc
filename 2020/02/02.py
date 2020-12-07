# hiiihihihihih
import re

# returns array of tuple with following 
# format (password, char, range-min, range-max)
def prepare_input():
    input_file = open("input.txt", "r")
    output = []

    for line in input_file:
        a = line.split(":")

        password = a[1][1:-1] # except first(space) and last char(newline)
        containing_char = a[0].split(" ")[1]
        min_number_of_chars = int(a[0].split(" ")[0].split("-")[0])
        max_number_of_chars = int(a[0].split(" ")[0].split("-")[1])

        output.append((
            password,
            containing_char,
            min_number_of_chars,
            max_number_of_chars))

    return output


def find_all(string, pattern):
    occurences = len(re.findall(pattern, string))
    return occurences


def is_valid_2(string, pattern, pos1, pos2):
    valid = False

    i1 = int(pos1) - 1
    i2 = int(pos2) - 1

    if (string[i1] == pattern and string[i2] == pattern):
        valid = False
    elif (string[i1] == pattern or string[i2] == pattern):
        valid = True

    return valid


def main():
    prepared_input = prepare_input()
    valid_passwords = 0

    for record in prepared_input:
        num = find_all(record[0], record[1])

        if (num >= record[2] and num <= record[3]):
            valid_passwords += 1

    # --------------------------------------------------------
    valid_passwords_2 = 0

    for record in prepared_input:
        res = is_valid_2(record[0], record[1], record[2], record[3]) # XDDDDD what the f is this
        if (res == True):
            valid_passwords_2 += 1

    print("Day 02 *  - answer - {}".format(valid_passwords))
    print("Day 02 ** - answer - {}".format(valid_passwords_2))


if __name__ == "__main__":
    main()
