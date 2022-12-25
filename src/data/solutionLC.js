const LeetCodeSolutions = [{
  "id": 1,
  "title": "Two Sum",
  "content": "Given an array of integers, return indices of the two numbers such that they add up to a specific target.\r You may assume that each input would have exactly one solution, and you may not use the same element twice.\r Example:\r Given nums = [2, 7, 11, 15], target = 9,\r Because nums[0] + nums[1] = 2 + 7 = 9,\r return [0, 1].",
  "javascript": "var twoSum = function(nums, target) {\r const map = new Map();\r for (let i = 0; i < nums.length; i++) {\r const complement = target - nums[i];\r if (map.has(complement)) {\r return [map.get(complement), i];\r }\r map.set(nums[i], i);\r }\r};",
  "python": "class Solution:\r def twoSum(self, nums: List[int], target: int) -> List[int]:\r map = {}\r for i in range(len(nums)):\r complement = target - nums[i]\r if complement in map:\r return [map[complement], i]\r map[nums[i]] = i",
  "java": "class Solution {\r public int[] twoSum(int[] nums, int target) {\r Map<Integer, Integer> map = new HashMap<>();\r for (int i = 0; i < nums.length; i++) {\r int complement = target - nums[i];\r if (map.containsKey(complement)) {\r return new int[] { map.get(complement), i };\r }\r map.put(nums[i], i);\r }\r throw new IllegalArgumentException(\"No two sum solution\");\r }\r}",
  "c++": "class Solution {\r public:\r vector<int> twoSum(vector<int>& nums, int target) {\r unordered_map<int, int> map;\r for (int i = 0; i < nums.size(); i++) {\r int complement = target - nums[i];\r if (map.find(complement) != map.end()) {\r return { map[complement], i };\r }\r map[nums[i]] = i;\r }\r throw runtime_error(\"No two sum solution\");\r }\r};",
  'Time_Complexity': "O(n)",
  'Space_Complexity': "O(n)",
},
{
  "id": 2,
  "title": "Add Two Numbers",
  "content": "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.\r You may assume the two numbers do not contain any leading zero, except the number 0 itself.\r Example:\r Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)\r Output: 7 -> 0 -> 8\r Explanation: 342 + 465 = 807.",
  "javascript": "var addTwoNumbers = function(l1, l2) {\r let dummyHead = new ListNode(0);\r let p = l1, q = l2, curr = dummyHead;\r let carry = 0;\r while (p != null || q != null) {\r let x = (p != null) ? p.val : 0;\r let y = (q != null) ? q.val : 0;\r let sum = carry + x + y;\r carry = Math.floor(sum / 10);\r curr.next = new ListNode(sum % 10);\r curr = curr.next;\r if (p != null) p = p.next;\r if (q != null) q = q.next;\r }\r if (carry > 0) {\r curr.next = new ListNode(carry);\r }\r return dummyHead.next;\r};",
  "python": "class Solution:\r def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:\r dummyHead = ListNode(0)\r p = l1\r q = l2\r curr = dummyHead\r carry = 0\r while p or q:\r x = p.val if p else 0\r y = q.val if q else 0\r sum = carry + x + y\r carry = sum // 10\r curr.next = ListNode(sum % 10)\r curr = curr.next\r if p:\r p = p.next\r if q:\r q = q.next\r if carry > 0:\r curr.next = ListNode(carry)\r return dummyHead.next",
  "java": "class Solution {\r public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\r ListNode dummyHead = new ListNode(0);\r ListNode p = l1, q = l2, curr = dummyHead;\r int carry = 0;\r while (p != null || q != null) {\r int x = (p != null) ? p.val : 0;\r int y = (q != null) ? q.val : 0;\r int sum = carry + x + y;\r carry = sum / 10;\r curr.next = new ListNode(sum % 10);\r curr = curr.next;\r if (p != null) p = p.next;\r if (q != null) q = q.next;\r }\r if (carry > 0) {\r curr.next = new ListNode(carry);\r }\r return dummyHead.next;\r }\r}",
  "c++": "class Solution {\r public:\r ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\r ListNode* dummyHead = new ListNode(0);\r ListNode* p = l1, * q = l2, * curr = dummyHead;\r int carry = 0;\r while (p != nullptr || q != nullptr) {\r int x = (p != nullptr) ? p->val : 0;\r int y = (q != nullptr) ? q->val : 0;\r int sum = carry + x + y;\r carry = sum / 10;\r curr->next = new ListNode(sum % 10);\r curr = curr->next;\r if (p != nullptr) p = p->next;\r if (q != nullptr) q = q->next;\r }\r if (carry > 0) {\r curr->next = new ListNode(carry);\r }\r return dummyHead->next;\r }\r};",
  'Time_Complexity': "O(max(m,n))",
  'Space_Complexity': "O(max(m,n))",
},
{
  "id": 3,
  "title": "Longest Substring Without Repeating Characters",
  "content": "Given a string, find the length of the longest substring without repeating characters.",
  "javascript": "var lengthOfLongestSubstring = function(s) {\r let n = s.length;\r let ans = 0;\r let map = new Map();\r for (let j = 0, i = 0; j < n; j++) {\r if (map.has(s[j])) {\r i = Math.max(map.get(s[j]), i);\r }\r ans = Math.max(ans, j - i + 1);\r map.set(s[j], j + 1);\r }\r return ans;\r};",
  "python": "class Solution:\r def lengthOfLongestSubstring(self, s: str) -> int:\r n = len(s)\r ans = 0\r i = 0\r j = 0\r map = {}\r while j < n:\r if s[j] in map:\r i = max(map[s[j]], i)\r ans = max(ans, j - i + 1)\r map[s[j]] = j + 1\r j += 1\r return ans",
  "java": "class Solution {\r public int lengthOfLongestSubstring(String s) {\r int n = s.length(), ans = 0;\r Map<Character, Integer> map = new HashMap<>();\r for (int j = 0, i = 0; j < n; j++) {\r if (map.containsKey(s.charAt(j))) {\r i = Math.max(map.get(s.charAt(j)), i);\r }\r ans = Math.max(ans, j - i + 1);\r map.put(s.charAt(j), j + 1);\r }\r return ans;\r }\r}",
  "c++": "class Solution {\r public:\r int lengthOfLongestSubstring(string s) {\r int n = s.length(), ans = 0;\r unordered_map<char, int> map;\r for (int j = 0, i = 0; j < n; j++) {\r if (map.find(s[j]) != map.end()) {\r i = max(map[s[j]], i);\r }\r ans = max(ans, j - i + 1);\r map[s[j]] = j + 1;\r }\r return ans;\r }\r};",
  'Time_Complexity': "O(n)",
  'Space_Complexity': "O(n)", 
},
{
  "id": 4,
  "title": "Median of Two Sorted Arrays",  
  'content': "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.", 
  "javascript": "var findMedianSortedArrays = function(nums1, nums2) {\r let m = nums1.length;\r let n = nums2.length;\r if (m > n) {\r let temp = nums1;\r nums1 = nums2;\r nums2 = temp;\r let tmp = m;\r m = n;\r n = tmp;\r }\r let iMin = 0, iMax = m, halfLen = Math.floor((m + n + 1) / 2);\r while (iMin <= iMax) {\r let i = Math.floor((iMin + iMax) / 2);\r let j = halfLen - i;\r if (i < iMax && nums2[j - 1] > nums1[i]) {\r iMin = i + 1;\r } else if (i > iMin && nums1[i - 1] > nums2[j]) {\r iMax = i - 1;\r } else {\r let maxLeft = 0;\r if (i === 0) {\r maxLeft = nums2[j - 1];\r } else if (j === 0) {\r maxLeft = nums1[i - 1];\r } else {\r maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);\r }\r if ((m + n) % 2 === 1) {\r return maxLeft;\r }\r let minRight = 0;\r if (i === m) {\r minRight = nums2[j];\r } else if (j === n) {\r minRight = nums1[i];\r } else {\r minRight = Math.min(nums2[j], nums1[i]);\r }\r return (maxLeft + minRight) / 2;\r }\r }\r};",
  "python": "class Solution:\r def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:\r m = len(nums1)\r n = len(nums2)\r if m > n:\r nums1, nums2, m, n = nums2, nums1, n, m\r if n == 0:\r raise ValueError\r imin, imax, half_len = 0, m, (m + n + 1) // 2\r while imin <= imax:\r i = (imin + imax) // 2\r j = half_len - i\r if i < m and nums2[j-1] > nums1[i]:\r imin = i + 1\r elif i > 0 and nums1[i-1] > nums2[j]:\r imax = i - 1\r else:\r if i == 0: max_of_left = nums2[j-1]\r elif j == 0: max_of_left = nums1[i-1]\r else: max_of_left = max(nums1[i-1], nums2[j-1])\r if (m + n) % 2 == 1:\r return max_of_left\r if i == m: min_of_right = nums2[j]\r elif j == n: min_of_right = nums1[i]\r else: min_of_right = min(nums1[i], nums2[j])\r return (max_of_left + min_of_right) / 2.0",
  "java": "class Solution {\r public double findMedianSortedArrays(int[] nums1, int[] nums2) {\r int m = nums1.length;\r int n = nums2.length;\r if (m > n) {\r int[] temp = nums1;\r nums1 = nums2;\r nums2 = temp;\r int tmp = m;\r m = n;\r n = tmp;\r }\r int iMin = 0, iMax = m, halfLen = (m + n + 1) / 2;\r while (iMin <= iMax) {\r int i = (iMin + iMax) / 2;\r int j = halfLen - i;\r if (i < iMax && nums2[j - 1] > nums1[i]) {\r iMin = i + 1;\r } else if (i > iMin && nums1[i - 1] > nums2[j]) {\r iMax = i - 1;\r } else {\r int maxLeft = 0;\r if (i == 0) {\r maxLeft = nums2[j - 1];\r } else if (j == 0) {\r maxLeft = nums1[i - 1];\r } else {\r maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);\r }\r if ((m + n) % 2 == 1) {\r return maxLeft;\r }\r int minRight = 0;\r if (i == m) {\r minRight = nums2[j];\r } else if (j == n) {\r minRight = nums1[i];\r } else {\r minRight = Math.min(nums2[j], nums1[i]);\r }\r return (maxLeft + minRight) / 2.0;\r }\r }\r return 0.0;\r }\r}",
  "c++": "class Solution {\r public:\r double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\r int m = nums1.size();\r int n = nums2.size();\r if (m > n) {\r vector<int> temp = nums1;\r nums1 = nums2;\r nums2 = temp;\r int tmp = m;\r m = n;\r n = tmp;\r }\r int iMin = 0, iMax = m, halfLen = (m + n + 1) / 2;\r while (iMin <= iMax) {\r int i = (iMin + iMax) / 2;\r int j = halfLen - i;\r if (i < iMax && nums2[j - 1] > nums1[i]) {\r iMin = i + 1;\r } else if (i > iMin && nums1[i - 1] > nums2[j]) {\r iMax = i - 1;\r } else {\r int maxLeft = 0;\r if (i == 0) {\r maxLeft = nums2[j - 1];\r } else if (j == 0) {\r maxLeft = nums1[i - 1];\r } else {\r maxLeft = max(nums1[i - 1], nums2[j - 1]);\r }\r if ((m + n) % 2 == 1) {\r return maxLeft;\r }\r int minRight = 0;\r if (i == m) {\r minRight = nums2[j];\r } else if (j == n) {\r minRight = nums1[i];\r } else {\r minRight = min(nums2[j], nums1[i]);\r }\r return (maxLeft + minRight) / 2.0;\r }\r }\r return 0.0;\r }\r};",
  "Time_Complexity": "O(log(min(m,n)))",
  "Space_Complexity": "O(1)"  
},
{
  "id": 5,
  "title": "Longest Palindromic Substring",
  "content": "Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.",
  "javascript": "var longestPalindrome = function(s) {\r let start = 0;\r let end = 0;\r for (let i = 0; i < s.length; i++) {\r let len1 = expandAroundCenter(s, i, i);\r let len2 = expandAroundCenter(s, i, i + 1);\r let len = Math.max(len1, len2);\r if (len > end - start) {\r start = i - Math.floor((len - 1) / 2);\r end = i + Math.floor(len / 2);\r }\r }\r return s.substring(start, end + 1);\r };\r var expandAroundCenter = function(s, left, right) {\r let L = left;\r let R = right;\r while (L >= 0 && R < s.length && s[L] === s[R]) {\r L--;\r R++;\r }\r return R - L - 1;\r };",
  "java": "class Solution {\r public String longestPalindrome(String s) {\r int start = 0;\r int end = 0;\r for (int i = 0; i < s.length(); i++) {\r int len1 = expandAroundCenter(s, i, i);\r int len2 = expandAroundCenter(s, i, i + 1);\r int len = Math.max(len1, len2);\r if (len > end - start) {\r start = i - (len - 1) / 2;\r end = i + len / 2;\r }\r }\r return s.substring(start, end + 1);\r }\r private int expandAroundCenter(String s, int left, int right) {\r int L = left;\r int R = right;\r while (L >= 0 && R < s.length() && s.charAt(L) == s.charAt(R)) {\r L--;\r R++;\r }\r return R - L - 1;\r }\r}",
  "c++": "class Solution {\r public:\r string longestPalindrome(string s) {\r int start = 0;\r int end = 0;\r for (int i = 0; i < s.length(); i++) {\r int len1 = expandAroundCenter(s, i, i);\r int len2 = expandAroundCenter(s, i, i + 1);\r int len = max(len1, len2);\r if (len > end - start) {\r start = i - (len - 1) / 2;\r end = i + len / 2;\r }\r }\r return s.substr(start, end - start + 1);\r }\r private:\r int expandAroundCenter(string s, int left, int right) {\r int L = left;\r int R = right;\r while (L >= 0 && R < s.length() && s[L] == s[R]) {\r L--;\r R++;\r }\r return R - L - 1;\r }\r};",
  "Time_Complexity": "O(n^2)",
  "Space_Complexity": "O(1)"

}
]