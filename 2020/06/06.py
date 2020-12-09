# iwqeqwewqe

def prepare_input():
    output = []

    with open("input.txt", "r") as f:
        raw_groups = f.read().split("\n\n")

        for raw_group in raw_groups:
            arr = raw_group.strip().split("\n")
            group = []

            for group_part in arr:
                group.append(group_part)

            output.append(group)

    return output

# https://careerkarma.com/blog/python-remove-duplicates-from-list/
def parse_input_1(input):
    output = []

    for group in input:
        whole_group = ""
        for part in group:
            whole_group += part

        unique_questions = list(set(whole_group))
        output.append(unique_questions)

    return output


def sum_arr_len(arr):
    result = 0
    for a in arr:
        result += len(a)

    return result


def main():
    prepared_input = prepare_input()
    star_1 = parse_input_1(prepared_input)

    print("Day 06 *  - correct answer: {}".format(sum_arr_len(star_1)))

if __name__ == "__main__":
    main()
